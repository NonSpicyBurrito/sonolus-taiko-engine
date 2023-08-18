import { ParticleEffectName } from 'sonolus-core'
import { layout } from '../../../../shared/src/engine/data/utils.mjs'
import { stage } from './stage.mjs'

export const particle = defineParticle({
    effects: {
        donHit: ParticleEffectName.NoteCircularTapRed,
        kaHit: ParticleEffectName.NoteCircularTapBlue,
    },
})

const slotEffectLayout = () => layout(stage.h)

export const playSlotEffect = (effect: ParticleEffect) =>
    effect.spawn(slotEffectLayout().translate(1, 0), 0.3, false)
