import { TJC, TJCObject } from '../tjc/index.cjs'

export const osuToTJC = (osu: string): TJC => {
    const sections: Record<string, string[]> = {
        '': [],
    }
    let section = sections['']

    const lines = osu
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => !!line)
        .filter((line) => !line.startsWith('//'))

    for (const line of lines) {
        if (line.startsWith('[') && line.endsWith(']')) {
            section = []
            sections[line.slice(1, -1)] = section

            continue
        }

        section.push(line)
    }

    let sliderMultiplier = 1
    for (const line of sections.Difficulty) {
        const [name, value] = line.split(':').map((value) => value.trim())
        if (name !== 'SliderMultiplier') continue

        sliderMultiplier = +value
    }

    const bpms = [
        {
            from: -Infinity,
            to: Infinity,
            value: 0,
        },
    ]

    const speeds = [
        {
            from: -Infinity,
            to: Infinity,
            value: 1,
        },
    ]

    for (const line of sections.TimingPoints) {
        const [ms, value, , , , , uninherited] = line
            .split(',')
            .map((value) => value.trim())
            .map((value) => +value)

        const time = ms / 1000

        if (uninherited) {
            bpms[bpms.length - 1].to = time
            bpms.push({
                from: time,
                to: Infinity,
                value: (60 * 1000) / value,
            })
        } else {
            speeds[speeds.length - 1].to = time
            speeds.push({
                from: time,
                to: Infinity,
                value: -100 / value,
            })
        }
    }

    const bpmSections: {
        from: number
        to: number
        beat: number
        value: number
    }[] = []

    let offset = 0
    const objects: TJCObject[] = []

    let beat = 0

    const [firstBpm, ...restBpms] = bpms

    if (firstBpm.to > 0) {
        bpmSections.push({
            from: 0,
            to: firstBpm.to,
            value: 240 / firstBpm.to,
            beat,
        })
        objects.push({
            type: 'bpm',
            beat: 0,
            bpm: 240 / firstBpm.to,
        })

        beat = 4
    } else {
        offset = firstBpm.to
    }

    for (const bpm of restBpms) {
        bpmSections.push({ ...bpm, beat })
        objects.push({
            type: 'bpm',
            beat,
            bpm: bpm.value,
        })

        beat += ((bpm.to - bpm.from) * bpm.value) / 60
    }

    const timeToBeat = (time: number) => {
        const bpmSection = bpmSections.find(
            (bpmSection) => time >= bpmSection.from && time < bpmSection.to,
        )
        if (!bpmSection) throw new Error(`Unexpected missing bpmSection ${time}`)

        return bpmSection.beat + ((time - bpmSection.from) * bpmSection.value) / 60
    }

    const timeToSpeed = (time: number) => {
        const speed = speeds.find((speed) => time >= speed.from && time < speed.to)
        if (!speed) throw new Error('Unexpected missing speed')

        return speed.value
    }

    for (const line of sections.HitObjects) {
        const [, , ms, type, hitSound, value1, value2, value3] = line
            .split(',')
            .map((value) => value.trim())
            .map((value) => +value)

        const time = ms / 1000
        const beat = timeToBeat(time)
        const speed = timeToSpeed(time)

        if (type & 1) {
            objects.push({
                type: hitSound & 2 || hitSound & 8 ? 'ka' : 'don',
                isDai: !!(hitSound & 4),
                beat,
                speed,
            })
        } else if (type & 2) {
            const distance = value2 * value3
            const velocity = sliderMultiplier * speed * 100
            const tailBeat = beat + distance / velocity

            objects.push({
                type: 'drumroll',
                isDai: !!(hitSound & 4),
                beat,
                speed,
                tailBeat,
            })
        } else if (type & 8) {
            const tailTime = value1 / 1000
            const tailBeat = timeToBeat(tailTime)

            objects.push({
                type: 'balloon',
                isDai: !!(hitSound & 4),
                beat,
                speed,
                tailBeat,
            })
        }
    }

    return {
        offset,
        objects,
    }
}
