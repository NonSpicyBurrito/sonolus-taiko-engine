import { drum } from '../../components/drum.js'
import { noteEffect } from '../../components/noteEffect.js'
import { touchDrum } from '../../components/touchDrum.js'
import { effect } from '../../effect.js'
import { particle, playSlotEffect } from '../../particle.js'

export const kaNoteHit = {
    enter() {
        touchDrum.hit()
        drum.hit('ka')
        noteEffect.play('ka')

        if (effect.clips.ka.exists) {
            effect.clips.ka.play(0)
        } else {
            effect.clips.kaFallback.play(0)
        }

        playSlotEffect(particle.effects.kaHit)
    },

    exit() {
        touchDrum.clear()
        drum.clear()
        noteEffect.clear()
    },
}
