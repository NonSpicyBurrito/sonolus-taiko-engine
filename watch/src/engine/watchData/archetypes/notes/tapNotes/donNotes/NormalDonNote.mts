import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { DonNote } from './DonNote.mjs'

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
