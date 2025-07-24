import { skin } from '../../../skin.js'
import { TapNote } from './TapNote.js'

export class DaiKaNote extends TapNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiKa,
        fallback: skin.sprites.kaFallback,
    }
}
