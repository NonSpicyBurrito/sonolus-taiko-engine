import { EngineArchetypeDataName } from 'sonolus-core'
import { options } from '../../../../configuration/options.mjs'
import { sfxDistance } from '../../../effect.mjs'
import { getDuration, noteLayout } from '../../../note.mjs'
import { slotEffectLayout } from '../../../particle.mjs'
import { getZ, layer } from '../../../skin.mjs'
import { NoteEffect } from '../../noteEffects/NoteEffect.mjs'
import { NoteHit } from '../../noteHits/NoteHit.mjs'
import { Note } from '../Note.mjs'

export abstract class TapNote extends Note {
    hasInput = true

    tapImport = this.defineImport({
        judgment: { name: EngineArchetypeDataName.Judgment, type: DataType<Judgment> },
        accuracy: { name: EngineArchetypeDataName.Accuracy, type: Number },
    })

    abstract sprites: {
        note: SkinSprite
        fallback: SkinSprite
    }

    abstract clips: {
        hit: EffectClip
        fallback: EffectClip
    }

    abstract effect: ParticleEffect

    abstract noteEffect: NoteEffect

    abstract noteHit: NoteHit

    initialized = this.entityMemory(Boolean)

    targetTime = this.entityMemory(Number)

    visualTime = this.entityMemory({
        min: Number,
        max: Number,
        hidden: Number,
    })

    z = this.entityMemory(Number)

    globalPreprocess() {
        this.life.miss = -20
    }

    preprocess() {
        this.targetTime = bpmChanges.at(this.import.beat).time

        const duration = getDuration(bpmChanges.at(this.import.beat).bpm, this.import.speed)

        this.visualTime.max = this.targetTime
        this.visualTime.min = this.visualTime.max - duration

        if (!replay.isReplay || this.tapImport.judgment) {
            if (options.noteEffectEnabled) this.spawnNoteEffect()

            this.spawnNoteHit()
        }

        if (options.sfxEnabled) {
            if (replay.isReplay) {
                this.scheduleReplaySFX()
            } else {
                this.scheduleSFX()
            }
        }

        this.result.time = this.targetTime
    }

    spawnTime() {
        return this.visualTime.min
    }

    despawnTime() {
        return this.hitTime
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

    terminate() {
        if (time.skip) return

        this.despawnTerminate()
    }

    get hitTime() {
        return this.targetTime + (replay.isReplay ? this.tapImport.accuracy : 0)
    }

    get useFallbackSprite() {
        return !this.sprites.note.exists
    }

    get useFallbackClip() {
        return !this.clips.hit.exists
    }

    globalInitialize() {
        if (options.hidden > 0)
            this.visualTime.hidden = Math.lerp(
                this.visualTime.max,
                this.visualTime.min,
                options.hidden,
            )

        this.z = getZ(layer.note, this.targetTime)
    }

    scheduleSFX() {
        if (this.useFallbackClip) {
            this.clips.fallback.schedule(this.hitTime, sfxDistance)
        } else {
            this.clips.hit.schedule(this.hitTime, sfxDistance)
        }
    }

    scheduleReplaySFX() {
        if (!this.tapImport.judgment) return

        this.scheduleSFX()
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

    despawnTerminate() {
        if (replay.isReplay && !this.tapImport.judgment) return

        if (options.slotEffectEnabled) this.playSlotEffect()
    }

    spawnNoteEffect() {
        this.noteEffect.spawn({
            startTime: this.hitTime,
        })
    }

    spawnNoteHit() {
        this.noteHit.spawn({
            startTime: this.hitTime,
        })
    }

    playSlotEffect() {
        const layout = slotEffectLayout().translate(1, 0)

        this.effect.spawn(layout, 0.3, false)
    }
}
