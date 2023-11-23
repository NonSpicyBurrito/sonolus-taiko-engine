import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { BalloonNote } from './BalloonNote.mjs'

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
