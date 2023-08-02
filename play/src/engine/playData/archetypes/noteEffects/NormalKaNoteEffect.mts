import { skin } from '../../skin.mjs'
import { NoteEffect } from './NoteEffect.mjs'

export class NormalKaNoteEffect extends NoteEffect {
    isDai = false

    sprites = {
        note: skin.sprites.ka,
        fallback: skin.sprites.kaFallback,
    }
}
