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

enum Mode {
    None,
    Overlay,
    Fall,
    Frozen,
}

let mode = tutorialMemory(DataType<Mode>)

let id = tutorialMemory(SkinSpriteId)

export const noteDisplay = {
    update() {
        if (!mode) return

        if (mode === Mode.Overlay) {
            const a = Math.unlerpClamped(1, 0.75, segment.time)

            const layout = noteLayout()
                .mul(2)
                .translate((scaledScreen.l + scaledScreen.r) / 2, 0)

            skin.sprites.draw(id, layout, layer.note, a)
        } else {
            const x = mode === Mode.Fall ? Math.unlerp(0, 2, segment.time) : 1

            skin.sprites.draw(id, noteLayout().translate(x, 0), layer.note, 1)
        }
    },

    showOverlay(type: keyof typeof sprites) {
        mode = Mode.Overlay
        this.setType(type)
    },

    showFall(type: keyof typeof sprites) {
        mode = Mode.Fall
        this.setType(type)
    },

    showFrozen(type: keyof typeof sprites) {
        mode = Mode.Frozen
        this.setType(type)
    },

    clear() {
        mode = Mode.None
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
