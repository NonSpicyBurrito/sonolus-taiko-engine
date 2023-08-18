import { drum } from '../../components/drum.mjs'
import { noteEffect } from '../../components/noteEffect.mjs'
import { touchDrum } from '../../components/touchDrum.mjs'
import { effect } from '../../effect.mjs'
import { particle, playSlotEffect } from '../../particle.mjs'

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
