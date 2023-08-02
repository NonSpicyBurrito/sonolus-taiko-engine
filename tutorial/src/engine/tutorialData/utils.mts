import { instruction } from './instruction.mjs'
import { hand, note, stage } from './shared.mjs'

export const noteLayout = () => layout(note.radius.normal)

export const noteEffectLayout = () => layout(note.radius.normal)

const slotEffectLayout = () => layout(stage.h)

const layout = (radius: number) =>
    new Rect({
        l: radius,
        r: -radius,
        t: radius,
        b: -radius,
    })

export const playSlotEffect = (effect: ParticleEffect) =>
    effect.spawn(slotEffectLayout().translate(1, 0), 0.3, false)

export const approach = (now: number) => Math.unlerp(0, 2, now)

export const drawHand = (angle: number, x: number, a: number) =>
    instruction.icons.hand.paint(
        new Vec(0, 1)
            .rotate(angle)
            .mul(0.25 * ui.configuration.instruction.scale)
            .add(hand.position)
            .translate(x, 0),
        0.25 * ui.configuration.instruction.scale,
        (180 * angle) / Math.PI,
        0,
        a * ui.configuration.instruction.alpha,
    )
