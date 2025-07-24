import { skin } from '../../../../skin.js'
import { DrumrollNote } from './DrumrollNote.js'

export class DaiDrumrollNote extends DrumrollNote {
    isDai = true

    sprites = {
        note: skin.sprites.daiDrumroll,
        fallback: skin.sprites.drumrollFallback,
        tail: skin.sprites.daiDrumrollTail,
        tailFallback: skin.sprites.drumrollTailFallback,
        connection: skin.sprites.daiDrumrollConnection,
        connectionFallback: skin.sprites.drumrollConnectionFallback,
    }
}
