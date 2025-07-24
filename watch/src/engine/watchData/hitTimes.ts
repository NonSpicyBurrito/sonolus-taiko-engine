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

export const resetHitTimes = () => {
    hitTimes.any = -9999
    hitTimes.don.left = -9999
    hitTimes.don.right = -9999
    hitTimes.ka.left = -9999
    hitTimes.ka.right = -9999
}
