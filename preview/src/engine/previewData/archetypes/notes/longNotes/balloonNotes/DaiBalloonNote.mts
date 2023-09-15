import { skin } from '../../../../skin.mjs'
import { BalloonNote } from './BalloonNote.mjs'

export class DaiBalloonNote extends BalloonNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiBalloon,
        fallback: skin.sprites.balloonFallback,
    }
}
