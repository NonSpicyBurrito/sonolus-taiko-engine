import { skin } from '../../skin.js'
import { NoteEffect } from './NoteEffect.js'

export class DaiBalloonNoteEffect extends NoteEffect {
    isDai = true

    sprites = {
        note: skin.sprites.daiBalloon,
        fallback: skin.sprites.balloonFallback,
    }
}
