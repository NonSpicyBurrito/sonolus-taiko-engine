import { skin } from '../../skin.js'
import { NoteEffect } from './NoteEffect.js'

export class DaiKaNoteEffect extends NoteEffect {
    isDai = true

    sprites = {
        note: skin.sprites.ka,
        fallback: skin.sprites.kaFallback,
    }
}
