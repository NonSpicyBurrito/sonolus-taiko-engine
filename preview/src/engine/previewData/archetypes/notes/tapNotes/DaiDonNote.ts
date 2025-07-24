import { skin } from '../../../skin.js'
import { TapNote } from './TapNote.js'

export class DaiDonNote extends TapNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiDon,
        fallback: skin.sprites.donFallback,
    }
}
