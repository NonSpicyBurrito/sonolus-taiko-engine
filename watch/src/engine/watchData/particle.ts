import { ParticleEffectName } from '@sonolus/core'
import { layout } from '../../../../shared/src/engine/data/utils.js'
import { options } from '../configuration/options.js'
import { stage } from './stage.js'

export const particle = defineParticle({
    effects: {
        donHit: ParticleEffectName.NoteCircularTapRed,
        kaHit: ParticleEffectName.NoteCircularTapCyan,
    },
})

export const slotEffectLayout = () => layout(stage.h * options.slotEffectSize)
