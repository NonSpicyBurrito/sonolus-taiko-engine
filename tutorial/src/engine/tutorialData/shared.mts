export const scaledScreen = tutorialData({
    l: Number,
    r: Number,
    t: Number,
    b: Number,
})

export const stage = tutorialData({
    h: Number,
})

export const note = tutorialData({
    radius: {
        normal: Number,
        dai: Number,
    },
})

export const hand = tutorialData({
    position: Vec,
})

export const segment = tutorialMemory({
    time: Number,
})
