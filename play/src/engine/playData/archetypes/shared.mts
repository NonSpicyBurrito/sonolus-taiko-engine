export const scaledScreen = levelData({
    l: Number,
    r: Number,
    t: Number,
    b: Number,
})

export const stage = levelData({
    h: Number,
})

export const note = levelData({
    radius: {
        normal: Number,
        dai: Number,
    },
})

export const hitTimes = levelMemory({
    any: Number,
    don: {
        left: Number,
        right: Number,
    },
    ka: {
        left: Number,
        right: Number,
    },
})
