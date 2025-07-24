import {
    EngineArchetypeDataName,
    EngineArchetypeName,
    LevelData,
    LevelDataEntity,
} from '@sonolus/core'
import {
    TJC,
    TJCBalloonNote,
    TJCBpmChangeObject,
    TJCDonNote,
    TJCDrumrollNote,
    TJCKaNote,
    TJCObject,
} from './index.js'

type Handler<T extends TJCObject> = (object: T) => {
    archetype: string
    data: Record<string, number>
}

export const tjcToLevelData = (tjc: TJC, offset = 0): LevelData => {
    const entities: LevelDataEntity[] = [
        {
            archetype: 'Initialization',
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
        bgmOffset: tjc.offset + offset,
        entities,
    }
}

const bpm: Handler<TJCBpmChangeObject> = (object) => ({
    archetype: EngineArchetypeName.BpmChange,
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        [EngineArchetypeDataName.Bpm]: object.bpm,
    },
})

const don: Handler<TJCDonNote> = (object) => ({
    archetype: object.isDai ? 'DaiDonNote' : 'NormalDonNote',
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        speed: object.speed,
    },
})

const ka: Handler<TJCKaNote> = (object) => ({
    archetype: object.isDai ? 'DaiKaNote' : 'NormalKaNote',
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        speed: object.speed,
    },
})

const balloon: Handler<TJCBalloonNote> = (object) => ({
    archetype: object.isDai ? 'DaiBalloonNote' : 'NormalBalloonNote',
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        speed: object.speed,
        tailBeat: object.tailBeat,
    },
})

const drumroll: Handler<TJCDrumrollNote> = (object) => ({
    archetype: object.isDai ? 'DaiDrumrollNote' : 'NormalDrumrollNote',
    data: {
        [EngineArchetypeDataName.Beat]: object.beat,
        speed: object.speed,
        tailBeat: object.tailBeat,
    },
})

const handlers: {
    [K in TJCObject['type']]: Handler<Extract<TJCObject, { type: K }>>
} = {
    bpm,
    don,
    ka,
    balloon,
    drumroll,
}
