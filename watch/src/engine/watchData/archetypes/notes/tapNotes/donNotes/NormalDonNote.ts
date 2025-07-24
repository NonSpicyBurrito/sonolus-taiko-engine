import { skin } from '../../../../skin.js'
import { archetypes } from '../../../index.js'
import { DonNote } from './DonNote.js'

export class NormalDonNote extends DonNote {
    isDai = false

    sprites = {
        note: skin.sprites.don,
        fallback: skin.sprites.donFallback,
    }

    get noteEffect() {
        return archetypes.NormalDonNoteEffect
    }
}
