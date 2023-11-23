import { ParticleEffectName } from 'sonolus-core'
import { layout } from '../../../../shared/src/engine/data/utils.mjs'
import { options } from '../configuration/options.mjs'
import { stage } from './stage.mjs'

export const particle = defineParticle({
    effects: {
        donHit: ParticleEffectName.NoteCircularTapRed,
        kaHit: ParticleEffectName.NoteCircularTapBlue,
    },
})

export const slotEffectLayout = () => layout(stage.h * options.slotEffectSize)
