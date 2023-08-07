import { noteEffectLayout } from '../../note.mjs'
import { scaledScreen } from '../../scaledScreen.mjs'
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

    animationTimes = this.entityMemory({
        start: Number,
        middle: Number,
        end: Number,
    })

    z = this.entityMemory(Number)

    initialize() {
        this.animationTimes.start = this.spawnData.startTime
        this.animationTimes.middle = this.animationTimes.start + 0.5
        this.animationTimes.end = this.animationTimes.middle + 0.25

        this.z = getZ(layer.effect, this.spawnData.startTime)
    }

    updateParallel() {
        if (time.now >= this.animationTimes.end) {
            this.despawn = true
        } else if (time.now >= this.animationTimes.middle) {
            this.renderFading()
        } else {
            this.renderFlying()
        }
    }

    get useFallbackSprite() {
        return !this.sprites.note.exists
    }

    renderFlying() {
        const p0 = new Vec(1, 0)
        const p1 = new Vec(0.5 + stage.h, scaledScreen.t)
        const p2 = new Vec(2 * stage.h, 2 * stage.h)

        const s = Math.unlerp(this.animationTimes.start, this.animationTimes.middle, time.now)
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
