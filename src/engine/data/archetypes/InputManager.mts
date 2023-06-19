const usedTouchIds = levelMemory(Collection(16, TouchId))

export const isUsed = (touch: Touch) => usedTouchIds.has(touch.id)

export const markAsUsed = (touch: Touch) => usedTouchIds.add(touch.id)

export const isDon = (touch: Touch) =>
    touch.position.sub(new Vec(0, screen.b)).length <= screen.h * 0.45

export class InputManager extends Archetype {
    spawnOrder() {
        return 1
    }

    shouldSpawn() {
        return entityInfos.get(0).state === EntityState.Despawned
    }

    touch() {
        usedTouchIds.clear()
    }
}
