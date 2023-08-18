import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { KaNote } from './KaNote.mjs'

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
