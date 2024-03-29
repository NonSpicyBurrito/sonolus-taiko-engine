import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { DrumrollNote } from './DrumrollNote.mjs'

export class NormalDrumrollNote extends DrumrollNote {
    isDai = false

    sprites = {
        head: skin.sprites.drumroll,
        headFallback: skin.sprites.drumrollFallback,
        tail: skin.sprites.drumrollTail,
        tailFallback: skin.sprites.drumrollTailFallback,
        connection: skin.sprites.drumrollConnection,
        connectionFallback: skin.sprites.drumrollConnectionFallback,
    }

    get noteEffects() {
        return {
            don: archetypes.NormalDonNoteEffect,
            ka: archetypes.NormalKaNoteEffect,
        }
    }
}
