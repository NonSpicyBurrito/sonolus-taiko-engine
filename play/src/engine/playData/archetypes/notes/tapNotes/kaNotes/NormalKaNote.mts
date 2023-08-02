import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { KaNote } from './KaNote.mjs'

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
