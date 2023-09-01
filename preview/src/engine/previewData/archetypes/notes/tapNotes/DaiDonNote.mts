import { skin } from '../../../skin.mjs'
import { TapNote } from './TapNote.mjs'

export class DaiDonNote extends TapNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiDon,
        fallback: skin.sprites.donFallback,
    }
}
