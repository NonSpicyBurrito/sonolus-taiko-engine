import { drum } from '../../components/drum.js'
import { noteEffect } from '../../components/noteEffect.js'
import { touchDrum } from '../../components/touchDrum.js'
import { effect } from '../../effect.js'
import { particle, playSlotEffect } from '../../particle.js'

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
