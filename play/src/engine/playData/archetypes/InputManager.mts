import { options } from '../../configuration/options.mjs'

const usedTouchIds = levelMemory(Collection(16, TouchId))

export const isUsed = (touch: Touch) => usedTouchIds.has(touch.id)

export const markAsUsed = (touch: Touch) => usedTouchIds.add(touch.id)

export const isDon = (touch: Touch) =>
    touch.position.sub(new Vec(0, screen.b)).length <= screen.h * options.drumSize

export class InputManager extends SpawnableArchetype({}) {
    touch() {
        usedTouchIds.clear()
    }
}
