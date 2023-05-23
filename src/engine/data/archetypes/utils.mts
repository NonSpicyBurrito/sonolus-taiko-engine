import { options } from '../../configuration/options.mjs'
import { note, stage } from './shared.mjs'

export const noteLayout = (isDai: boolean) =>
    layout((isDai ? note.radius.dai : note.radius.normal) * options.noteSize)

export const noteEffectLayout = (isDai: boolean) =>
    layout((isDai ? note.radius.dai : note.radius.normal) * options.noteEffectSize)

export const slotEffectLayout = () => layout(stage.h * options.slotEffectSize)

const layout = (radius: number) =>
    new Rect({
        l: radius,
        r: -radius,
        t: radius,
        b: -radius,
    })

export const getZ = (layer: number, time: number, order = 0) => layer - time / 1000 - order / 100000

export const getScheduleSFXTime = (targetTime: number) =>
    targetTime - 0.5 - Math.max(audio.offset, 0)
