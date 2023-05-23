import {
    EngineArchetypeDataName,
    EngineArchetypeName,
    LevelData,
    LevelDataEntity,
} from 'sonolus-core'
import {
    BPMObject,
    BalloonNote,
    ChartObject,
    DonNote,
    DrumrollNote,
    KaNote,
    TJC,
} from './index.cjs'

type Handler<T extends ChartObject> = (object: T) => {
    archetype: string
    data: Record<string, number>
}

export const tjcToLevelData = (tjc: TJC): LevelData => {
    const entities: LevelDataEntity[] = [
        {
            archetype: 'Initialization',
            data: [],
        },
        {
            archetype: 'InputManager',
            data: [],
        },
        {
            archetype: 'Stage',
            data: [],
        },
    ]

    for (const object of tjc.objects) {
        const { archetype, data } = handlers[object.type](object as never)

        entities.push({
            archetype,
            data: Object.entries(data).map(([name, value]) => ({ name, value })),
        })
    }

    return {
        bgmOffset: tjc.offset,
        entities,
    }
}

const bpm: Handler<BPMObject> = (object) => ({
    archetype: EngineArchetypeName.BpmChange,
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        [EngineArchetypeDataName.Bpm]: object.bpm,
    },
})

const don: Handler<DonNote> = (object) => ({
    archetype: object.isDai ? 'DaiDonNote' : 'NormalDonNote',
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        speed: object.speed,
    },
})

const ka: Handler<KaNote> = (object) => ({
    archetype: object.isDai ? 'DaiKaNote' : 'NormalKaNote',
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        speed: object.speed,
    },
})

const balloon: Handler<BalloonNote> = (object) => ({
    archetype: object.isDai ? 'DaiBalloonNote' : 'NormalBalloonNote',
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        speed: object.speed,
        tailBeat: object.tailBeat,
    },
})

const drumroll: Handler<DrumrollNote> = (object) => ({
    archetype: object.isDai ? 'DaiDrumrollNote' : 'NormalDrumrollNote',
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        speed: object.speed,
        tailBeat: object.tailBeat,
    },
})

const handlers: {
    [K in ChartObject['type']]: Handler<Extract<ChartObject, { type: K }>>
} = {
    bpm,
    don,
    ka,
    balloon,
    drumroll,
}
