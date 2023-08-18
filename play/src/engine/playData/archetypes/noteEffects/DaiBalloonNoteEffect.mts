import { skin } from '../../skin.mjs'
import { NoteEffect } from './NoteEffect.mjs'

export class DaiBalloonNoteEffect extends NoteEffect {
    isDai = true

    sprites = {
        note: skin.sprites.daiBalloon,
        fallback: skin.sprites.balloonFallback,
    }
}
