import { TJC } from '../tjc/index.js'
import parseTJA from './parse.js'

export const tjaToTJC = (tja: string, courseId: number): TJC => {
    const { headers, courses } = parseTJA(tja)

    const course = courses[courseId]
    if (!course) throw new Error(`Course ${courseId} not found`)

    const tjc: TJC = {
        offset: 0,
        objects: [],
    }

    let beat = 0
    if (headers.offset < 0) {
        tjc.objects.push({
            type: 'bpm',
            beat: 0,
            bpm: -240 / headers.offset,
        })

        beat = 4
    } else {
        tjc.offset = -headers.offset
    }

    const speeds = [
        {
            from: -Infinity,
            to: Infinity,
            value: 1,
        },
    ]
    const addSpeed = (from: number, value: number) => {
        speeds[speeds.length - 1].to = from
        speeds.push({
            from,
            to: Infinity,
            value,
        })
    }
    const getSpeed = (beat: number) => {
        const speed = speeds.find((speed) => beat >= speed.from && beat < speed.to)
        if (!speed) throw new Error('Unexpected missing speed')

        return speed.value
    }

    const heads: {
        note: '5' | '6' | '7' | '9'
        beat: number
    }[] = []

    for (const measure of course.measures) {
        const beats = (4 * measure.length[0]) / measure.length[1]
        const length = measure.data.length || 1

        for (const event of measure.events) {
            switch (event.name) {
                case 'bpm':
                    tjc.objects.push({
                        type: 'bpm',
                        beat: beat + (beats * event.position) / length,
                        bpm: event.value,
                    })
                    break
                case 'scroll':
                    addSpeed(beat + (beats * event.position) / length, event.value)
                    break
            }
        }

        for (const [position, note] of measure.data.split('').entries()) {
            switch (note) {
                case '1':
                case '2':
                case '3':
                case '4':
                case 'A':
                case 'B':
                    tjc.objects.push({
                        type: ['1', '3', 'A'].includes(note) ? 'don' : 'ka',
                        isDai: ['3', '4', 'A', 'B'].includes(note),
                        beat: beat + (beats * position) / length,
                        speed: getSpeed(beat + (beats * position) / length),
                    })
                    break
                case '5':
                case '6':
                case '7':
                case '9':
                    heads.push({
                        note,
                        beat: beat + (beats * position) / length,
                    })
                    break
                case '8': {
                    const tailBeat = beat + (beats * position) / length

                    for (const head of heads) {
                        tjc.objects.push({
                            type: ['5', '6'].includes(head.note) ? 'drumroll' : 'balloon',
                            isDai: ['6', '9'].includes(head.note),
                            beat: head.beat,
                            speed: getSpeed(head.beat),
                            tailBeat,
                        })
                    }

                    heads.length = 0
                    break
                }
                case '0':
                case 'F':
                    break
            }
        }

        beat += beats
    }

    return tjc
}
