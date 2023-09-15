import { skin } from '../../../skin.mjs'
import { TapNote } from './TapNote.mjs'

export class NormalKaNote extends TapNote {
    isDai = false

    sprites = {
        note: skin.sprites.ka,
        fallback: skin.sprites.kaFallback,
    }
}
