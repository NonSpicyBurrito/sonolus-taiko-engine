import { noteEffectLayout } from '../../note.mjs'
import { getZ, layer } from '../../skin.mjs'
import { stage } from '../../stage.mjs'

const lerp = (x: VecLike, y: VecLike, s: number) =>
    new Vec(Math.lerp(x.x, y.x, s), Math.lerp(x.y, y.y, s))

export abstract class NoteEffect extends SpawnableArchetype({
    startTime: Number,
}) {
    abstract isDai: boolean

    abstract sprites: {
        note: SkinSprite
        fallback: SkinSprite
    }

    initialized = this.entityMemory(Boolean)

    animationTimes = this.entityMemory({
        middle: Number,
        end: Number,
    })

    z = this.entityMemory(Number)

    spawnTime() {
        return this.spawnData.startTime
    }

    despawnTime() {
        this.animationTimes.middle = this.spawnData.startTime + 0.5
        this.animationTimes.end = this.animationTimes.middle + 0.25

        return this.animationTimes.end
    }

    initialize() {
        if (this.initialized) return
        this.initialized = true

        this.globalInitialize()
    }

    updateParallel() {
        if (time.now >= this.animationTimes.middle) {
            this.renderFading()
        } else {
            this.renderFlying()
        }
    }

    get useFallbackSprite() {
        return !this.sprites.note.exists
    }

    globalInitialize() {
        this.z = getZ(layer.effect, this.spawnData.startTime)
    }

    renderFlying() {
        const p0 = new Vec(1, 0)
        const p1 = new Vec(0.5 + stage.h, 3 * stage.h)
        const p2 = new Vec(2 * stage.h, 2 * stage.h)

        const s = Math.unlerp(this.spawnData.startTime, this.animationTimes.middle, time.now)
        const m1 = lerp(p0, p1, s)
        const m2 = lerp(p1, p2, s)
        const p = lerp(m1, m2, s)

        const layout = noteEffectLayout(this.isDai).add(p)

        if (this.useFallbackSprite) {
            this.sprites.fallback.draw(layout, this.z, 1)
        } else {
            this.sprites.note.draw(layout, this.z, 1)
        }
    }

    renderFading() {
        const layout = noteEffectLayout(this.isDai).translate(2 * stage.h, 2 * stage.h)
        const a = Math.unlerp(this.animationTimes.end, this.animationTimes.middle, time.now)

        if (this.useFallbackSprite) {
            this.sprites.fallback.draw(layout, this.z, a)
        } else {
            this.sprites.note.draw(layout, this.z, a)
        }
    }
}
