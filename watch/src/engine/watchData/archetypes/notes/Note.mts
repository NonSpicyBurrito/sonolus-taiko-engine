import { EngineArchetypeDataName } from 'sonolus-core'

export abstract class Note extends Archetype {
    abstract isDai: boolean

    data = this.defineData({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
        speed: { name: 'speed', type: Number },
    })
}
