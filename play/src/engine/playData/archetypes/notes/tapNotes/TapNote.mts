import { windows } from '../../../../../../../shared/src/engine/data/windows.mjs'
import { options } from '../../../../configuration/options.mjs'
import { sfxDistance } from '../../../effect.mjs'
import { getDuration, noteLayout } from '../../../note.mjs'
import { slotEffectLayout } from '../../../particle.mjs'
import { getZ, layer } from '../../../skin.mjs'
import { markAsUsed } from '../../InputManager.mjs'
import { NoteEffect } from '../../noteEffects/NoteEffect.mjs'
import { Note } from '../Note.mjs'

export abstract class TapNote extends Note {
    hasInput = true

    abstract sprites: {
        note: SkinSprite
        fallback: SkinSprite
    }

    abstract clips: {
        hit: EffectClip
        fallback: EffectClip
    }

    abstract effects: {
        hit: ParticleEffect
    }

    abstract bucket: Bucket

    abstract noteEffect: NoteEffect

    targetTime = this.entityMemory(Number)

    visualTime = this.entityMemory(Range)
    hiddenTime = this.entityMemory(Number)

    inputTime = this.entityMemory(Range)

    z = this.entityMemory(Number)

    globalPreprocess() {
        this.life.miss = -20
    }

    preprocess() {
        this.targetTime = bpmChanges.at(this.import.beat).time

        const duration = getDuration(bpmChanges.at(this.import.beat).bpm, this.import.speed)

        this.visualTime.copyFrom(Range.l.mul(duration).add(this.targetTime))

        this.inputTime.copyFrom(windows.good.add(this.targetTime).add(input.offset))

        this.spawnTime = Math.min(this.visualTime.min, this.inputTime.min)

        if (this.shouldScheduleSFX) this.scheduleSFX()
    }

    initialize() {
        if (options.hidden > 0)
            this.hiddenTime = Math.lerp(this.visualTime.max, this.visualTime.min, options.hidden)

        this.z = getZ(layer.note, this.targetTime)

        this.result.accuracy = windows.good.max
    }

    touchOrder = 1

    updateParallel() {
        if (time.now > this.inputTime.max) this.despawn = true
        if (this.despawn) return

        if (time.now < this.visualTime.min) return
        if (options.hidden > 0 && time.now > this.hiddenTime) return

        this.render()
    }

    get useFallbackSprite() {
        return !this.sprites.note.exists
    }

    get useFallbackClip() {
        return !this.clips.hit.exists
    }

    get shouldScheduleSFX() {
        return options.sfxEnabled && options.autoSFX
    }

    complete(touch: Touch) {
        markAsUsed(touch)

        this.result.judgment = input.judge(touch.startTime, this.targetTime, windows)
        this.result.accuracy = touch.startTime - this.targetTime

        this.result.bucket.index = this.bucket.index
        this.result.bucket.value = this.result.accuracy * 1000

        this.playHitEffects()

        this.despawn = true
    }

    scheduleSFX() {
        if (this.useFallbackClip) {
            this.clips.fallback.schedule(this.targetTime, sfxDistance)
        } else {
            this.clips.hit.schedule(this.targetTime, sfxDistance)
        }
    }

    render() {
        const x = Math.remap(this.visualTime.min, this.visualTime.max, 0, 1, time.now)

        const layout = noteLayout(this.isDai).translate(x, 0)

        if (this.useFallbackSprite) {
            this.sprites.fallback.draw(layout, this.z, 1)
        } else {
            this.sprites.note.draw(layout, this.z, 1)
        }
    }

    playHitEffects() {
        if (options.noteEffectEnabled) this.playNoteEffect()
        if (options.slotEffectEnabled) this.playSlotEffect()
    }

    playNoteEffect() {
        this.noteEffect.spawn({
            startTime: time.now,
        })
    }

    playSlotEffect() {
        const layout = slotEffectLayout().translate(1, 0)

        this.effects.hit.spawn(layout, 0.3, false)
    }
}
