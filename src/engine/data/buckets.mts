import { UnitText } from 'sonolus-core'
import { skin } from './skin.mjs'

export const buckets = defineBuckets({
    donNote: {
        sprites: [
            {
                id: skin.sprites.don.id,
                fallbackId: skin.sprites.donFallback.id,
                x: 0,
                y: 0,
                w: 2,
                h: 2,
                rotation: 0,
            },
        ],
        unit: UnitText.Millisecond,
    },
    kaNote: {
        sprites: [
            {
                id: skin.sprites.ka.id,
                fallbackId: skin.sprites.kaFallback.id,
                x: 0,
                y: 0,
                w: 2,
                h: 2,
                rotation: 0,
            },
        ],
        unit: UnitText.Millisecond,
    },
})
