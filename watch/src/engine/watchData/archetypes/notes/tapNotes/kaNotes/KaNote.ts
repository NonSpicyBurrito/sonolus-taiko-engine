import { buckets } from '../../../../buckets.js'
import { effect } from '../../../../effect.js'
import { particle } from '../../../../particle.js'
import { archetypes } from '../../../index.js'
import { TapNote } from '../TapNote.js'

export abstract class KaNote extends TapNote {
    clips = {
        hit: effect.clips.ka,
        fallback: effect.clips.kaFallback,
    }

    effect = particle.effects.kaHit

    bucket = buckets.kaNote

    get noteHits() {
        return {
            left: archetypes.KaLeftNoteHit,
            right: archetypes.KaRightNoteHit,
        }
    }
}
