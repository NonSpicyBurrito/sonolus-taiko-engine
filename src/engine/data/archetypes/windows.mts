const fromMs = (perfect: number, great: number, good: number) => {
    const toWindow = (ms: number) => ({ min: -ms / 1000, max: ms / 1000 })

    return {
        perfect: toWindow(perfect),
        great: toWindow(great),
        good: toWindow(good),
    }
}

export const windows = fromMs(25, 75, 108)
