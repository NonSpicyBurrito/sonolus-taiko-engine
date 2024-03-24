import { EngineArchetypeDataName } from 'sonolus-core'

export abstract class Note extends Archetype {
    abstract isDai: boolean

    import = this.defineImport({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
        speed: { name: 'speed', type: Number },
    })
}
