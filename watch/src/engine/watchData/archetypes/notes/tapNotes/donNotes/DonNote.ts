import { buckets } from '../../../../buckets.js'
import { effect } from '../../../../effect.js'
import { particle } from '../../../../particle.js'
import { archetypes } from '../../../index.js'
import { TapNote } from '../TapNote.js'

export abstract class DonNote extends TapNote {
    clips = {
        hit: effect.clips.don,
        fallback: effect.clips.donFallback,
    }

    effect = particle.effects.donHit

    bucket = buckets.donNote

    get noteHits() {
        return {
            left: archetypes.DonLeftNoteHit,
            right: archetypes.DonRightNoteHit,
        }
    }
}
