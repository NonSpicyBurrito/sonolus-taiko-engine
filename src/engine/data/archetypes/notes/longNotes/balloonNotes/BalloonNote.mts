import { options } from '../../../../../configuration/options.mjs'
import { layer } from '../../../layer.mjs'
import { NoteEffect } from '../../../noteEffects/NoteEffect.mjs'
import { note } from '../../../shared.mjs'
import { getZ, noteLayout } from '../../../utils.mjs'
import { Note } from '../../Note.mjs'
import { LongNote } from '../LongNote.mjs'

export abstract class BalloonNote extends LongNote {
    abstract sprites: {
        note: SkinSprite
        fallback: SkinSprite
        attachment: SkinSprite
    }

    abstract noteEffect: NoteEffect

    visualTime = this.entityMemory({
        min: Number,
        max: Number,
        tail: Number,
        hidden: Number,
    })

    note = this.entityMemory({
        z: Number,
    })
    attachment = this.entityMemory({
        z: Number,
    })

    preprocess() {
        const duration = Note.getDuration(bpmChanges.at(this.data.beat).bpm, this.data.speed)

        this.visualTime.max = bpmChanges.at(this.data.beat).time
        this.visualTime.min = this.visualTime.max - duration

        this.spawnTime = this.visualTime.min
    }

    initialize() {
        this.visualTime.tail = bpmChanges.at(this.longData.tailBeat).time

        if (options.hidden > 0)
            this.visualTime.hidden = Math.lerp(
                this.visualTime.max,
                this.visualTime.min,
                options.hidden,
            )

        this.note.z = getZ(layer.note, this.visualTime.max)

        this.attachment.z = getZ(layer.note, this.visualTime.max, 1)
    }

    updateParallel() {
        if (time.now >= this.visualTime.tail) this.despawn = true
        if (this.despawn) return

        if (options.hidden > 0 && time.now > this.visualTime.hidden) return

        this.render()
    }

    terminate() {
        if (options.noteEffectEnabled) this.playNoteEffect()
    }

    get useFallbackSprite() {
        return !this.sprites.note.exists
    }

    render() {
        const x = Math.remapClamped(this.visualTime.min, this.visualTime.max, 0, 1, time.now)

        this.renderNote(x)
        this.renderAttachment(x)
    }

    renderNote(x: number) {
        const layout = noteLayout(this.isDai).translate(x, 0)

        if (this.useFallbackSprite) {
            this.sprites.fallback.draw(layout, this.note.z, 1)
        } else {
            this.sprites.note.draw(layout, this.note.z, 1)
        }
    }

    renderAttachment(x: number) {
        if (!this.sprites.attachment.exists) return

        const layout = new Rect({
            l: 0,
            r: (-note.radius.normal * 230) / 61,
            t: note.radius.normal,
            b: -note.radius.normal,
        })
            .translate(-0.95 * (this.isDai ? note.radius.dai : note.radius.normal), 0)
            .translate(x, 0)

        this.sprites.attachment.draw(layout, this.attachment.z, 1)
    }

    playNoteEffect() {
        this.noteEffect.spawn({
            startTime: time.now,
        })
    }
}
