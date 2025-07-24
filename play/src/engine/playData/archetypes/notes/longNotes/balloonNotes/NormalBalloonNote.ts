import { skin } from '../../../../skin.js'
import { archetypes } from '../../../index.js'
import { BalloonNote } from './BalloonNote.js'

export class NormalBalloonNote extends BalloonNote {
    isDai = false

    sprites = {
        note: skin.sprites.balloon,
        fallback: skin.sprites.balloonFallback,
    }

    get noteEffect() {
        return archetypes.NormalBalloonNoteEffect
    }
}
