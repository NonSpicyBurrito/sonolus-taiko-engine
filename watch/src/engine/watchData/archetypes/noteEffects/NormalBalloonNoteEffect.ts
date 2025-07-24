import { skin } from '../../skin.js'
import { NoteEffect } from './NoteEffect.js'

export class NormalBalloonNoteEffect extends NoteEffect {
    isDai = false

    sprites = {
        note: skin.sprites.balloon,
        fallback: skin.sprites.balloonFallback,
    }
}
