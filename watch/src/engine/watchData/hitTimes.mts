export const hitTimes = levelMemory({
    any: Number,
    don: Number,
    ka: Number,
})

export const resetHitTimes = () => {
    hitTimes.any = -9999
    hitTimes.don = -9999
    hitTimes.ka = -9999
}
