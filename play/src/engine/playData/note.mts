import { layout } from '../../../../shared/src/engine/data/utils.mjs'
import { options } from '../configuration/options.mjs'

export const note = levelData({
    radius: {
        normal: Number,
        dai: Number,
    },
})

export const getDuration = (bpm: number, speed: number) => 240 / bpm / speed / options.noteSpeed

export const noteLayout = (isDai: boolean) =>
    layout((isDai ? note.radius.dai : note.radius.normal) * options.noteSize)

export const noteEffectLayout = (isDai: boolean) =>
    layout((isDai ? note.radius.dai : note.radius.normal) * options.noteEffectSize)
