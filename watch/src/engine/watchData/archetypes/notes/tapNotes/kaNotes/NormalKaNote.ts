import { skin } from '../../../../skin.js'
import { archetypes } from '../../../index.js'
import { KaNote } from './KaNote.js'

export class NormalKaNote extends KaNote {
    isDai = false

    sprites = {
        note: skin.sprites.ka,
        fallback: skin.sprites.kaFallback,
    }

    get noteEffect() {
        return archetypes.NormalKaNoteEffect
    }
}
