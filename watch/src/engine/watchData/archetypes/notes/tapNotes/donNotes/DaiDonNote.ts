import { skin } from '../../../../skin.js'
import { archetypes } from '../../../index.js'
import { DonNote } from './DonNote.js'

export class DaiDonNote extends DonNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiDon,
        fallback: skin.sprites.donFallback,
    }

    get noteEffect() {
        return archetypes.DaiDonNoteEffect
    }
}
