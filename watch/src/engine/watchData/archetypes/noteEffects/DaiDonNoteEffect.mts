import { skin } from '../../skin.mjs'
import { NoteEffect } from './NoteEffect.mjs'

export class DaiDonNoteEffect extends NoteEffect {
    isDai = true

    sprites = {
        note: skin.sprites.daiDon,
        fallback: skin.sprites.donFallback,
    }
}
