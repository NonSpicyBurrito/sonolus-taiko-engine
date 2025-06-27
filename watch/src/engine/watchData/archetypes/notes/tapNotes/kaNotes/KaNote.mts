import { buckets } from '../../../../buckets.mjs'
import { effect } from '../../../../effect.mjs'
import { particle } from '../../../../particle.mjs'
import { archetypes } from '../../../index.mjs'
import { TapNote } from '../TapNote.mjs'

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
