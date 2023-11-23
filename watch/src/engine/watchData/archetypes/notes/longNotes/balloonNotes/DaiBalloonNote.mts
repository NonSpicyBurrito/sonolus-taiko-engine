import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { BalloonNote } from './BalloonNote.mjs'

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
