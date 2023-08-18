import { EffectClipName } from 'sonolus-core'

export const effect = defineEffect({
    clips: {
        don: 'Taiko Don',
        donFallback: EffectClipName.Perfect,

        ka: 'Taiko Ka',
        kaFallback: EffectClipName.PerfectAlternative,
    },
})

export const sfxDistance = 0.02

export const getScheduleSFXTime = (targetTime: number) =>
    targetTime - 0.5 - Math.max(audio.offset, 0)
