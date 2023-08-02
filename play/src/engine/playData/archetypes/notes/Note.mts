import { EngineArchetypeDataName } from 'sonolus-core'
import { options } from '../../../configuration/options.mjs'

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

    static getDuration(bpm: number, speed: number) {
        return 240 / bpm / speed / options.noteSpeed
    }
}
