import { noteEffectLayout } from '../note.js'
import { scaledScreen } from '../scaledScreen.js'
import { segment } from '../segment.js'
import { layer, skin } from '../skin.js'
import { stage } from '../stage.js'

const sprites = {
    don: {
        note: skin.sprites.don,
        fallback: skin.sprites.donFallback,
    },
    ka: {
        note: skin.sprites.ka,
        fallback: skin.sprites.kaFallback,
    },
}

let mode = tutorialMemory(Boolean)

let id = tutorialMemory(SkinSpriteId)

const lerp = (x: VecLike, y: VecLike, s: number) =>
    new Vec(Math.lerp(x.x, y.x, s), Math.lerp(x.y, y.y, s))

export const noteEffect = {
    update() {
        if (!mode) return

        if (segment.time < 0.5) {
            this.renderFlying()
        } else if (segment.time < 0.75) {
            this.renderFading()
        }
    },

    renderFlying() {
        const p0 = new Vec(1, 0)
        const p1 = new Vec(0.5 + stage.h, scaledScreen.t)
        const p2 = new Vec(2 * stage.h, 2 * stage.h)

        const s = Math.unlerp(0, 0.5, segment.time)
        const m1 = lerp(p0, p1, s)
        const m2 = lerp(p1, p2, s)
        const p = lerp(m1, m2, s)

        const layout = noteEffectLayout().add(p)

        skin.sprites.draw(id, layout, layer.effect, 1)
    },

    renderFading() {
        const layout = noteEffectLayout().translate(2 * stage.h, 2 * stage.h)
        const a = Math.unlerp(0.75, 0.5, segment.time)

        skin.sprites.draw(id, layout, layer.effect, a)
    },

    play(type: keyof typeof sprites) {
        mode = true
        this.setType(type)
    },

    clear() {
        mode = false
    },

    setType(type: keyof typeof sprites) {
        for (const [key, { note, fallback }] of Object.entries(sprites)) {
            if (key !== type) continue

            if (note.exists) {
                id = note.id
            } else {
                id = fallback.id
            }
        }
    },
}
