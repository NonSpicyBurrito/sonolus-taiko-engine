import { options } from '../../configuration/options.js'
import { drum } from '../drum.js'

const usedTouchIds = levelMemory(Collection(16, TouchId))

export const isUsed = (touch: Touch) => usedTouchIds.has(touch.id)

export const markAsUsed = (touch: Touch) => {
    usedTouchIds.add(touch.id)
}

export const isDon = (touch: Touch) =>
    touch.position.sub(drum.center).length <= screen.h * options.drumSize

export const isRight = (touch: Touch) =>
    options.stageDirection ? touch.position.y >= 0 : touch.position.x >= 0

export class InputManager extends SpawnableArchetype({}) {
    touch() {
        usedTouchIds.clear()
    }
}
