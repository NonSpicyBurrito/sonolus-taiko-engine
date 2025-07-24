import { segment } from '../segment.js'
import { layer, skin } from '../skin.js'
import { stage } from '../stage.js'

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

enum Mode {
    None,
    Don,
    Ka,
}

let mode = tutorialMemory(DataType<Mode>)

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

        if (mode === Mode.Don) {
            sprites.don.left.draw(layout, layer.drumHit, a)
            sprites.don.right.draw(layout, layer.drumHit, a)
        } else {
            sprites.ka.left.draw(layout, layer.drumHit, a)
            sprites.ka.right.draw(layout, layer.drumHit, a)
        }
    },

    hit(type: 'don' | 'ka') {
        mode = type === 'don' ? Mode.Don : Mode.Ka
    },

    clear() {
        mode = Mode.None
    },
}
