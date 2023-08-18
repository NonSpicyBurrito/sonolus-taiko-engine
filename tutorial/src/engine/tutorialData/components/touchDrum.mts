import { scaledScreen } from '../scaledScreen.mjs'
import { segment } from '../segment.mjs'
import { layer, skin } from '../skin.mjs'

const sprites = {
    touchDrum: skin.sprites.touchDrum,
}

let mode = tutorialMemory(Boolean)

export const touchDrum = {
    update() {
        if (!sprites.touchDrum.exists) return

        const s = mode ? Math.unlerpClamped(0, 0.1, segment.time) : 1

        const h = (scaledScreen.t - scaledScreen.b) * 0.45
        const w = (h * 842) / (2 * 436)

        const layout = new Rect({
            l: Math.lerp(scaledScreen.l, scaledScreen.r, 0.5) + w,
            r: Math.lerp(scaledScreen.l, scaledScreen.r, 0.5) - w,
            t: scaledScreen.b + h,
            b: scaledScreen.b,
        }).translate(0, Math.lerp(-0.1 * h, 0, s))

        sprites.touchDrum.draw(layout, layer.touchDrum, 1)
    },

    hit() {
        mode = true
    },

    clear() {
        mode = false
    },
}
