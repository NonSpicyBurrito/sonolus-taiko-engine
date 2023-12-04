import { options } from '../../../../../configuration/options.mjs'
import { getDuration, note, noteLayout } from '../../../../note.mjs'
import { getZ, layer, skin } from '../../../../skin.mjs'
import { NoteEffect } from '../../../noteEffects/NoteEffect.mjs'
import { LongNote } from '../LongNote.mjs'

const attachmentSprites = [
    skin.sprites.balloonAttachment1,
    skin.sprites.balloonAttachment2,
    skin.sprites.balloonAttachment3,
    skin.sprites.balloonAttachment4,
    skin.sprites.balloonAttachment5,
    skin.sprites.balloonAttachment6,
    skin.sprites.balloonAttachment7,
    skin.sprites.balloonAttachment8,
]

export abstract class BalloonNote extends LongNote {
    abstract sprites: {
        note: SkinSprite
        fallback: SkinSprite
    }

    abstract noteEffect: NoteEffect

    initialized = this.entityMemory(Boolean)

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
        const duration = getDuration(bpmChanges.at(this.data.beat).bpm, this.data.speed)

        this.visualTime.max = bpmChanges.at(this.data.beat).time
        this.visualTime.min = this.visualTime.max - duration
        this.visualTime.tail = bpmChanges.at(this.longData.tailBeat).time

        if (options.noteEffectEnabled) this.spawnNoteEffect()
    }

    spawnTime() {
        return this.visualTime.min
    }

    despawnTime() {
        return this.visualTime.tail
    }

    initialize() {
        if (this.initialized) return
        this.initialized = true

        this.globalInitialize()
    }

    updateParallel() {
        if (options.hidden > 0 && time.now > this.visualTime.hidden) return

        this.render()
    }

    get useFallbackSprite() {
        return !this.sprites.note.exists
    }

    get shouldRenderAttachment() {
        return attachmentSprites.every((sprite) => sprite.exists)
    }

    globalInitialize() {
        if (options.hidden > 0)
            this.visualTime.hidden = Math.lerp(
                this.visualTime.max,
                this.visualTime.min,
                options.hidden,
            )

        this.note.z = getZ(layer.note, this.visualTime.max)

        this.attachment.z = getZ(layer.note, this.visualTime.max, -1)
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
        if (!this.shouldRenderAttachment) return

        const t = Math.unlerp(this.visualTime.max, this.visualTime.tail, time.now)

        const id =
            t < 0.125
                ? attachmentSprites[0].id
                : t < 0.25
                  ? attachmentSprites[1].id
                  : t < 0.375
                    ? attachmentSprites[2].id
                    : t < 0.5
                      ? attachmentSprites[3].id
                      : t < 0.625
                        ? attachmentSprites[4].id
                        : t < 0.75
                          ? attachmentSprites[5].id
                          : t < 0.875
                            ? attachmentSprites[6].id
                            : attachmentSprites[7].id

        const layout = new Rect({
            l: 0,
            r: (-note.radius.normal * 264) / 26,
            t: (note.radius.normal * 124) / 26,
            b: (-note.radius.normal * 124) / 26,
        })
            .translate(-0.7 * (this.isDai ? note.radius.dai : note.radius.normal), 0)
            .translate(x, 0)

        skin.sprites.draw(id, layout, this.attachment.z, 1)
    }

    spawnNoteEffect() {
        this.noteEffect.spawn({
            startTime: this.visualTime.tail,
        })
    }
}
