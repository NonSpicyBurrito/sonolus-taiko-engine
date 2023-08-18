import { layout } from '../../../../shared/src/engine/data/utils.mjs'

export const note = tutorialData({
    radius: {
        normal: Number,
        dai: Number,
    },
})

export const noteLayout = () => layout(note.radius.normal)

export const noteEffectLayout = () => layout(note.radius.normal)
