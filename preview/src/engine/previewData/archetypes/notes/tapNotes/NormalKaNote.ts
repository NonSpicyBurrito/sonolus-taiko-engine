import { skin } from '../../../skin.js'
import { TapNote } from './TapNote.js'

export class NormalKaNote extends TapNote {
    isDai = false

    sprites = {
        note: skin.sprites.ka,
        fallback: skin.sprites.kaFallback,
    }
}
