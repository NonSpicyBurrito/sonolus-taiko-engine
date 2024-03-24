import { options } from '../../../../../configuration/options.mjs'
import { getDuration, note, noteLayout } from '../../../../note.mjs'
import { getZ, layer } from '../../../../skin.mjs'
import { isDon, isUsed } from '../../../InputManager.mjs'
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

    visualTime = this.entityMemory({
        head: {
            min: Number,
            max: Number,
            hidden: Number,
        },
        tail: {
            min: Number,
            max: Number,
            hidden: Number,
        },
    })

    head = this.entityMemory({
        z: Number,
    })
    connection = this.entityMemory({
        z: Number,
    })
    tail = this.entityMemory({
        z: Number,
    })

    preprocess() {
        const duration = getDuration(bpmChanges.at(this.import.beat).bpm, this.import.speed)

        this.visualTime.head.max = bpmChanges.at(this.import.beat).time
        this.visualTime.head.min = this.visualTime.head.max - duration

        this.spawnTime = this.visualTime.head.min
    }

    initialize() {
        this.visualTime.tail.max = bpmChanges.at(this.longImport.tailBeat).time
        this.visualTime.tail.min =
            this.visualTime.tail.max - this.visualTime.head.max + this.visualTime.head.min

        if (options.hidden > 0) {
            this.visualTime.head.hidden = Math.lerp(
                this.visualTime.head.max,
                this.visualTime.head.min,
                options.hidden,
            )

            this.visualTime.tail.hidden = Math.lerp(
                this.visualTime.tail.max,
                this.visualTime.tail.min,
                options.hidden,
            )
        }

        this.head.z = getZ(layer.note, this.visualTime.head.max)

        this.connection.z = getZ(layer.note, this.visualTime.head.max, 1)

        this.tail.z = getZ(layer.note, this.visualTime.head.max, 2)
    }

    touchOrder = 2
    touch() {
        if (!options.noteEffectEnabled) return

        if (time.now < this.visualTime.head.max) return

        for (const touch of touches) {
            if (!touch.started) continue
            if (isUsed(touch)) continue

            if (isDon(touch)) {
                this.noteEffects.don.spawn({
                    startTime: time.now,
                })
            } else {
                this.noteEffects.ka.spawn({
                    startTime: time.now,
                })
            }
        }
    }

    updateParallel() {
        if (time.now >= this.visualTime.tail.max) this.despawn = true
        if (this.despawn) return

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

    render() {
        if (options.hidden > 0 && time.now >= this.visualTime.tail.hidden) return

        const headX = Math.remap(this.visualTime.head.min, this.visualTime.head.max, 0, 1, time.now)
        const tailX = Math.remap(this.visualTime.tail.min, this.visualTime.tail.max, 0, 1, time.now)

        this.renderHead(headX)
        this.renderTail(tailX)
        this.renderConnection(headX, tailX)
    }

    renderHead(x: number) {
        if (options.hidden > 0 && time.now >= this.visualTime.head.hidden) return

        const layout = noteLayout(this.isDai).translate(x, 0)

        if (this.useFallbackHeadSprite) {
            this.sprites.headFallback.draw(layout, this.head.z, 1)
        } else {
            this.sprites.head.draw(layout, this.head.z, 1)
        }
    }

    renderTail(x: number) {
        if (time.now < this.visualTime.tail.min) return

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
