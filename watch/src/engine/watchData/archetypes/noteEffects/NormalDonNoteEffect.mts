import { skin } from '../../skin.mjs'
import { NoteEffect } from './NoteEffect.mjs'

export class NormalDonNoteEffect extends NoteEffect {
    isDai = false

    sprites = {
        note: skin.sprites.don,
        fallback: skin.sprites.donFallback,
    }
}
