import { buckets } from '../../../../buckets.js'
import { effect } from '../../../../effect.js'
import { particle } from '../../../../particle.js'
import { isDon, isUsed } from '../../../InputManager.js'
import { TapNote } from '../TapNote.js'

export abstract class DonNote extends TapNote {
    clips = {
        hit: effect.clips.don,
        fallback: effect.clips.donFallback,
    }

    effects = {
        hit: particle.effects.donHit,
    }

    bucket = buckets.donNote

    touch() {
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
