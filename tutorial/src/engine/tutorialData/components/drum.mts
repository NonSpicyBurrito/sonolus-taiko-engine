import { layer } from '../layer.mjs'
import { segment, stage } from '../shared.mjs'
import { skin } from '../skin.mjs'

const sprites = {
    drum: skin.sprites.drum,
    don: {
        left: skin.sprites.drumDonLeft,
        right: skin.sprites.drumDonRight,
    },
    ka: {
        left: skin.sprites.drumKaLeft,
        right: skin.sprites.drumKaRight,
    },
}

let mode = tutorialMemory(DataType<0 | 1 | 2>)

export const drum = {
    update() {
        if (
            !sprites.drum.exists ||
            !sprites.don.left.exists ||
            !sprites.don.right.exists ||
            !sprites.ka.left.exists ||
            !sprites.ka.right.exists
        )
            return

        const h = stage.h
        const w = (h * 138) / 162

        const layout = new Rect({
            l: w,
            r: -w,
            t: h,
            b: -h,
        }).translate(1, -2 * h)

        sprites.drum.draw(layout, layer.drum, 1)

        if (!mode) return

        const a = 1 - Math.unlerpClamped(0, 0.1, segment.time)

        if (mode === 1) {
            sprites.don.left.draw(layout, layer.drumHit, a)
            sprites.don.right.draw(layout, layer.drumHit, a)
        } else {
            sprites.ka.left.draw(layout, layer.drumHit, a)
            sprites.ka.right.draw(layout, layer.drumHit, a)
        }
    },

    hit(type: 'don' | 'ka') {
        mode = type === 'don' ? 1 : 2
    },

    clear() {
        mode = 0
    },
}
