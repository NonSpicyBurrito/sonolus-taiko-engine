import { EngineArchetypeDataName } from 'sonolus-core'

export abstract class Note extends Archetype {
    abstract isDai: boolean

    data = this.defineData({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
        speed: { name: 'speed', type: Number },
    })

    spawnTime = this.entityMemory(Number)

    spawnOrder() {
        return 1000 + this.spawnTime
    }

    shouldSpawn() {
        return time.now >= this.spawnTime
    }
}
