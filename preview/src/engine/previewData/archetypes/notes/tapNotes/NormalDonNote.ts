import { skin } from '../../../skin.js'
import { TapNote } from './TapNote.js'

export class NormalDonNote extends TapNote {
    isDai = false

    sprites = {
        note: skin.sprites.don,
        fallback: skin.sprites.donFallback,
    }
}
