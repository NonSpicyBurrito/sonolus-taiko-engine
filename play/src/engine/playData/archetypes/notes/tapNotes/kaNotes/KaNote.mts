import { buckets } from '../../../../buckets.mjs'
import { effect } from '../../../../effect.mjs'
import { particle } from '../../../../particle.mjs'
import { isDon, isUsed } from '../../../InputManager.mjs'
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

    touch() {
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
