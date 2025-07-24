import { skin } from '../../skin.js'
import { NoteEffect } from './NoteEffect.js'

export class NormalDonNoteEffect extends NoteEffect {
    isDai = false

    sprites = {
        note: skin.sprites.don,
        fallback: skin.sprites.donFallback,
    }
}
