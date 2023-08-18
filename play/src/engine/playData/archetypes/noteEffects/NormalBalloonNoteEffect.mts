import { skin } from '../../skin.mjs'
import { NoteEffect } from './NoteEffect.mjs'

export class NormalBalloonNoteEffect extends NoteEffect {
    isDai = false

    sprites = {
        note: skin.sprites.balloon,
        fallback: skin.sprites.balloonFallback,
    }
}
