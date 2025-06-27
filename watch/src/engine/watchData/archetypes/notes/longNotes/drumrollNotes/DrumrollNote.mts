import { options } from '../../../../../configuration/options.mjs'
import { getDuration, note, noteLayout } from '../../../../note.mjs'
import { getZ, layer } from '../../../../skin.mjs'
import { NoteEffect } from '../../../noteEffects/NoteEffect.mjs'
import { LongNote } from '../LongNote.mjs'

export abstract class DrumrollNote extends LongNote {
    abstract sprites: {
        head: SkinSprite
        headFallback: SkinSprite
        tail: SkinSprite
        tailFallback: SkinSprite
        connection: SkinSprite
        connectionFallback: SkinSprite
    }

    abstract noteEffects: {
        don: NoteEffect
        ka: NoteEffect
    }

    initialized = this.entityMemory(Boolean)

    head = this.entityMemory({
        visualTime: Range,
        hiddenTime: Number,
        z: Number,
    })

    connection = this.entityMemory({
        z: Number,
    })

    tail = this.entityMemory({
        visualTime: Range,
        hiddenTime: Number,
        z: Number,
    })

    preprocess() {
        const duration = getDuration(bpmChanges.at(this.import.beat).bpm, this.import.speed)

        this.head.visualTime.copyFrom(
            Range.l.mul(duration).add(bpmChanges.at(this.import.beat).time),
        )
        this.tail.visualTime.copyFrom(
            Range.l.mul(duration).add(bpmChanges.at(this.longImport.tailBeat).time),
        )

        this.scheduleHits(0, this.noteEffects.don)
        this.scheduleHits(1, this.noteEffects.ka)
    }

    spawnTime() {
        return this.head.visualTime.min
    }

    despawnTime() {
        return this.tail.visualTime.max
    }

    initialize() {
        if (this.initialized) return
        this.initialized = true

        this.globalInitialize()
    }

    updateParallel() {
        this.render()
    }

    get useFallbackHeadSprite() {
        return !this.sprites.head.exists
    }

    get useFallbackTailSprite() {
        return !this.sprites.tail.exists
    }

    get useFallbackConnectionSprite() {
        return !this.sprites.connection.exists
    }

    scheduleHits(offset: number, noteEffect: NoteEffect) {
        let t = -999999
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (true) {
            const nt = streams.getNextKey(this.info.index * 2 + offset, t)
            if (nt === t) break

            t = nt
            noteEffect.spawn({
                startTime: t,
            })
        }
    }

    globalInitialize() {
        if (options.hidden > 0) {
            this.head.hiddenTime = Math.lerp(
                this.head.visualTime.max,
                this.head.visualTime.min,
                options.hidden,
            )

            this.tail.hiddenTime = Math.lerp(
                this.tail.visualTime.max,
                this.tail.visualTime.min,
                options.hidden,
            )
        }

        this.head.z = getZ(layer.note, this.head.visualTime.max)

        this.connection.z = getZ(layer.note, this.head.visualTime.max, 1)

        this.tail.z = getZ(layer.note, this.head.visualTime.max, 2)
    }

    render() {
        if (options.hidden > 0 && time.now >= this.tail.hiddenTime) return

        const headX = Math.remap(this.head.visualTime.min, this.head.visualTime.max, 0, 1, time.now)
        const tailX = Math.remap(this.tail.visualTime.min, this.tail.visualTime.max, 0, 1, time.now)

        this.renderHead(headX)
        this.renderTail(tailX)
        this.renderConnection(headX, tailX)
    }

    renderHead(x: number) {
        if (options.hidden > 0 && time.now >= this.head.hiddenTime) return

        const layout = noteLayout(this.isDai).translate(x, 0)

        if (this.useFallbackHeadSprite) {
            this.sprites.headFallback.draw(layout, this.head.z, 1)
        } else {
            this.sprites.head.draw(layout, this.head.z, 1)
        }
    }

    renderTail(x: number) {
        if (time.now < this.tail.visualTime.min) return

        const layout = noteLayout(this.isDai).translate(x, 0)

        if (this.useFallbackTailSprite) {
            this.sprites.tailFallback.draw(layout, this.tail.z, 1)
        } else {
            this.sprites.tail.draw(layout, this.tail.z, 1)
        }
    }

    renderConnection(headX: number, tailX: number) {
        const l = options.hidden > 0 ? Math.clamp(headX, 0, 1 - options.hidden) : Math.max(headX, 0)
        const r = options.hidden > 0 ? Math.clamp(tailX, 0, 1 - options.hidden) : Math.max(tailX, 0)

        if (this.useFallbackConnectionSprite) {
            const layout = {
                x1: l,
                y1: (this.isDai ? note.radius.dai : note.radius.normal) * options.noteSize,
                x2: r,
                y2: (this.isDai ? note.radius.dai : note.radius.normal) * options.noteSize,
                x3: r,
                y3: (this.isDai ? note.radius.dai : note.radius.normal) * -options.noteSize,
                x4: l,
                y4: (this.isDai ? note.radius.dai : note.radius.normal) * -options.noteSize,
            }

            this.sprites.connectionFallback.draw(layout, this.connection.z, 1)
        } else {
            const layout = new Rect({
                l: l,
                r: r,
                t: (this.isDai ? note.radius.dai : note.radius.normal) * options.noteSize,
                b: (this.isDai ? note.radius.dai : note.radius.normal) * -options.noteSize,
            })

            this.sprites.connection.draw(layout, this.connection.z, 1)
        }
    }
}
