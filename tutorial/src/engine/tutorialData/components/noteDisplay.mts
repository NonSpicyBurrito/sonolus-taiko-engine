import { noteLayout } from '../note.mjs'
import { scaledScreen } from '../scaledScreen.mjs'
import { segment } from '../segment.mjs'
import { layer, skin } from '../skin.mjs'

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

let mode = tutorialMemory(DataType<0 | 1 | 2 | 3>)

let id = tutorialMemory(SkinSpriteId)

export const noteDisplay = {
    update() {
        if (!mode) return

        if (mode === 1) {
            const a = Math.unlerpClamped(1, 0.75, segment.time)

            const layout = noteLayout()
                .mul(2)
                .translate((scaledScreen.l + scaledScreen.r) / 2, 0)

            skin.sprites.draw(id, layout, layer.note, a)
        } else {
            const x = mode === 2 ? Math.unlerp(0, 2, segment.time) : 1

            skin.sprites.draw(id, noteLayout().translate(x, 0), layer.note, 1)
        }
    },

    showOverlay(type: keyof typeof sprites) {
        mode = 1
        this.setType(type)
    },

    showFall(type: keyof typeof sprites) {
        mode = 2
        this.setType(type)
    },

    showFrozen(type: keyof typeof sprites) {
        mode = 3
        this.setType(type)
    },

    clear() {
        mode = 0
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
