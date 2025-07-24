import { skin } from '../../skin.js'
import { NoteEffect } from './NoteEffect.js'

export class NormalKaNoteEffect extends NoteEffect {
    isDai = false

    sprites = {
        note: skin.sprites.ka,
        fallback: skin.sprites.kaFallback,
    }
}
