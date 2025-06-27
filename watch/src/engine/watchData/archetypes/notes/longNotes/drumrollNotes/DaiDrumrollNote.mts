import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { DrumrollNote } from './DrumrollNote.mjs'

export class DaiDrumrollNote extends DrumrollNote {
    isDai = true

    sprites = {
        head: skin.sprites.daiDrumroll,
        headFallback: skin.sprites.drumrollFallback,
        tail: skin.sprites.daiDrumrollTail,
        tailFallback: skin.sprites.drumrollTailFallback,
        connection: skin.sprites.daiDrumrollConnection,
        connectionFallback: skin.sprites.drumrollConnectionFallback,
    }

    get noteEffects() {
        return {
            don: archetypes.DaiDonNoteEffect,
            ka: archetypes.DaiKaNoteEffect,
        }
    }
}
