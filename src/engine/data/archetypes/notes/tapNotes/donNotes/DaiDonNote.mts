import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { DonNote } from './DonNote.mjs'

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
