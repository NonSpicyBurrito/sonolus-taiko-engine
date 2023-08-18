export const layout = (radius: number) =>
    new Rect({
        l: radius,
        r: -radius,
        t: radius,
        b: -radius,
    })
