import { hitTimes } from '../../hitTimes.mjs'

export abstract class NoteHit extends SpawnableArchetype({
    startTime: Number,
}) {
    abstract type: 'don' | 'ka'

    spawnTime() {
        return this.spawnData.startTime
    }

    despawnTime() {
        return this.spawnData.startTime + 0.1
    }

    updateSequentialOrder = 1
    updateSequential() {
        hitTimes.any = Math.max(hitTimes.any, this.spawnData.startTime)
        hitTimes[this.type] = Math.max(hitTimes[this.type], this.spawnData.startTime)
    }
}
