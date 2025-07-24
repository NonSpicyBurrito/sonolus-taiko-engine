import { skin } from '../../skin.js'
import { NoteEffect } from './NoteEffect.js'

export class DaiDonNoteEffect extends NoteEffect {
    isDai = true

    sprites = {
        note: skin.sprites.daiDon,
        fallback: skin.sprites.donFallback,
    }
}
