import { effect } from '../../../../effect.mjs'
import { particle } from '../../../../particle.mjs'
import { archetypes } from '../../../index.mjs'
import { TapNote } from '../TapNote.mjs'

export abstract class DonNote extends TapNote {
    clips = {
        hit: effect.clips.don,
        fallback: effect.clips.donFallback,
    }

    effect = particle.effects.donHit

    get noteHit() {
        return archetypes.DonNoteHit
    }
}
