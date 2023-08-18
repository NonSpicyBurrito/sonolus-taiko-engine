import { options } from '../../../../../configuration/options.mjs'
import { buckets } from '../../../../buckets.mjs'
import { effect } from '../../../../effect.mjs'
import { hitTimes } from '../../../../hitTimes.mjs'
import { particle } from '../../../../particle.mjs'
import { isDon, isUsed } from '../../../InputManager.mjs'
import { TapNote } from '../TapNote.mjs'

export abstract class DonNote extends TapNote {
    clips = {
        hit: effect.clips.don,
        fallback: effect.clips.donFallback,
    }

    effects = {
        hit: particle.effects.donHit,
    }

    bucket = buckets.donNote

    updateSequential() {
        if (!options.autoplay) return
        if (time.now < this.targetTime) return

        hitTimes.any = time.now
        hitTimes.don.left = time.now
        hitTimes.don.right = time.now
    }

    touch() {
        if (options.autoplay) return

        if (time.now < this.inputTime.min) return

        for (const touch of touches) {
            if (!touch.started) continue
            if (!isDon(touch)) continue
            if (isUsed(touch)) continue

            this.complete(touch)
            return
        }
    }
}
