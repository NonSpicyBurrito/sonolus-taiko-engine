import { hitTimes } from '../../hitTimes.mjs'

export abstract class NoteHit extends SpawnableArchetype({
    startTime: Number,
}) {
    abstract type: 'don' | 'ka'
    abstract direction: 'left' | 'right'

    spawnTime() {
        return this.spawnData.startTime
    }

    despawnTime() {
        return this.spawnData.startTime + 0.1
    }

    updateSequentialOrder = 1
    updateSequential() {
        hitTimes.any = Math.max(hitTimes.any, this.spawnData.startTime)
        hitTimes[this.type][this.direction] = Math.max(
            hitTimes[this.type][this.direction],
            this.spawnData.startTime,
        )
    }
}
