import { skin } from '../../../../skin.js'
import { DrumrollNote } from './DrumrollNote.js'

export class NormalDrumrollNote extends DrumrollNote {
    isDai = false

    sprites = {
        note: skin.sprites.drumroll,
        fallback: skin.sprites.drumrollFallback,
        tail: skin.sprites.drumrollTail,
        tailFallback: skin.sprites.drumrollTailFallback,
        connection: skin.sprites.drumrollConnection,
        connectionFallback: skin.sprites.drumrollConnectionFallback,
    }
}
