import { skin } from '../../../../skin.js'
import { archetypes } from '../../../index.js'
import { KaNote } from './KaNote.js'

export class DaiKaNote extends KaNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiKa,
        fallback: skin.sprites.kaFallback,
    }

    get noteEffect() {
        return archetypes.DaiKaNoteEffect
    }
}
