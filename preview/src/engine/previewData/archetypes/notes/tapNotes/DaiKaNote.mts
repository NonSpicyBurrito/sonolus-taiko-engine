import { skin } from '../../../skin.mjs'
import { TapNote } from './TapNote.mjs'

export class DaiKaNote extends TapNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiKa,
        fallback: skin.sprites.kaFallback,
    }
}
