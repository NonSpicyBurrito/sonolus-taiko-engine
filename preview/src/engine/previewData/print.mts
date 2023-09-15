import { panel } from './panel.mjs'
import { skin } from './skin.mjs'

export const print = (
    value: number,
    time: number,
    format: PrintFormat,
    decimalPlaces: number | 'auto',
    color: PrintColor,
    side: 'top' | 'bottom',
) =>
    canvas.print({
        value,
        format,
        decimalPlaces,
        anchor: getAnchor(panel.getPos(time).translate(0, side === 'top' ? -1.5 : 1.5)),
        pivot: { x: 0.5, y: side === 'top' ? 0 : 1 },
        size: { x: screen.h / 10, y: screen.h / 20 },
        rotation: 0,
        color,
        alpha: 1,
        horizontalAlign: HorizontalAlign.Center,
        background: false,
    })

const getAnchor = (pos: Vec) => {
    const anchor = pos.transform(skin.transform)
    anchor.x = Math.clamp(anchor.x, screen.l + screen.h / 20, screen.r - screen.h / 20)

    return anchor
}
