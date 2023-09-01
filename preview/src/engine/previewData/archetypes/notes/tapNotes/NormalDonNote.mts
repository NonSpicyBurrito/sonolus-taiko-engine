import { skin } from '../../../skin.mjs'
import { TapNote } from './TapNote.mjs'

export class NormalDonNote extends TapNote {
    isDai = false

    sprites = {
        note: skin.sprites.don,
        fallback: skin.sprites.donFallback,
    }
}
