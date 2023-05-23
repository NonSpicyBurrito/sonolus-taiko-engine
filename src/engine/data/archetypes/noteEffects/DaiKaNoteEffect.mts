import { skin } from '../../skin.mjs'
import { NoteEffect } from './NoteEffect.mjs'

export class DaiKaNoteEffect extends NoteEffect {
    isDai = true

    sprites = {
        note: skin.sprites.ka,
        fallback: skin.sprites.kaFallback,
    }
}
