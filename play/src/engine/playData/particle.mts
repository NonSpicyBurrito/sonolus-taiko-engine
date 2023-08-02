import { ParticleEffectName } from 'sonolus-core'

export const particle = defineParticle({
    effects: {
        donHit: ParticleEffectName.NoteCircularTapRed,
        kaHit: ParticleEffectName.NoteCircularTapBlue,
    },
})
