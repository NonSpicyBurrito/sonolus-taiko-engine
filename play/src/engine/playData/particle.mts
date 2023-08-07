import { ParticleEffectName } from 'sonolus-core'
import { options } from '../configuration/options.mjs'
import { stage } from './stage.mjs'
import { layout } from './utils.mjs'

export const particle = defineParticle({
    effects: {
        donHit: ParticleEffectName.NoteCircularTapRed,
        kaHit: ParticleEffectName.NoteCircularTapBlue,
    },
})

export const slotEffectLayout = () => layout(stage.h * options.slotEffectSize)
