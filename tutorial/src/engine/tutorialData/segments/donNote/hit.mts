import { drum } from '../../components/drum.mjs'
import { noteEffect } from '../../components/noteEffect.mjs'
import { touchDrum } from '../../components/touchDrum.mjs'
import { effect } from '../../effect.mjs'
import { particle } from '../../particle.mjs'
import { playSlotEffect } from '../../utils.mjs'

export const donNoteHit = {
    enter() {
        touchDrum.hit()
        drum.hit('don')
        noteEffect.play('don')

        if (effect.clips.don.exists) {
            effect.clips.don.play(0)
        } else {
            effect.clips.donFallback.play(0)
        }

        playSlotEffect(particle.effects.donHit)
    },

    exit() {
        touchDrum.clear()
        drum.clear()
        noteEffect.clear()
    },
}
