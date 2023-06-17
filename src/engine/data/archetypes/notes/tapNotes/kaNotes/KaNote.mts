import { options } from '../../../../../configuration/options.mjs'
import { buckets } from '../../../../buckets.mjs'
import { effect } from '../../../../effect.mjs'
import { particle } from '../../../../particle.mjs'
import { isDon, isUsed } from '../../../InputManager.mjs'
import { hitTimes } from '../../../shared.mjs'
import { TapNote } from '../TapNote.mjs'

export abstract class KaNote extends TapNote {
    clips = {
        hit: effect.clips.ka,
        fallback: effect.clips.kaFallback,
    }

    effects = {
        hit: particle.effects.kaHit,
    }

    bucket = buckets.kaNote

    updateSequential() {
        if (!options.autoplay) return
        if (time.now < this.targetTime) return

        hitTimes.any = time.now
        hitTimes.ka.left = time.now
        hitTimes.ka.right = time.now
    }

    touch() {
        if (options.autoplay) return

        if (time.now < this.inputTime.min) return

        for (const touch of touches) {
            if (!touch.started) continue
            if (isDon(touch)) continue
            if (isUsed(touch)) continue

            this.complete(touch)
            return
        }
    }
}
