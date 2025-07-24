import { skin } from '../../../../skin.js'
import { archetypes } from '../../../index.js'
import { BalloonNote } from './BalloonNote.js'

export class DaiBalloonNote extends BalloonNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiBalloon,
        fallback: skin.sprites.balloonFallback,
    }

    get noteEffect() {
        return archetypes.DaiBalloonNoteEffect
    }
}
