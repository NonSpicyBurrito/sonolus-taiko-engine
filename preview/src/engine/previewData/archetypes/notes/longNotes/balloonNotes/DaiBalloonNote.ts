import { skin } from '../../../../skin.js'
import { BalloonNote } from './BalloonNote.js'

export class DaiBalloonNote extends BalloonNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiBalloon,
        fallback: skin.sprites.balloonFallback,
    }
}
