import { EffectClipName } from 'sonolus-core'

export const effect = defineEffect({
    clips: {
        don: 'Taiko Don',
        donFallback: EffectClipName.Perfect,

        ka: 'Taiko Ka',
        kaFallback: EffectClipName.PerfectAlternative,
    },
})
