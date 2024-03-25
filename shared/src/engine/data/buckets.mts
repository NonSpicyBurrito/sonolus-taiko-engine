import { EngineDataBucket, Text } from 'sonolus-core'

export const createBucketDefinition = (
    sprites: Record<'don' | 'donFallback' | 'ka' | 'kaFallback', { id: number }>,
) =>
    ({
        donNote: {
            sprites: [
                {
                    id: sprites.don.id,
                    fallbackId: sprites.donFallback.id,
                    x: 0,
                    y: 0,
                    w: 2,
                    h: 2,
                    rotation: 0,
                },
            ],
            unit: Text.MillisecondUnit,
        },
        kaNote: {
            sprites: [
                {
                    id: sprites.ka.id,
                    fallbackId: sprites.kaFallback.id,
                    x: 0,
                    y: 0,
                    w: 2,
                    h: 2,
                    rotation: 0,
                },
            ],
            unit: Text.MillisecondUnit,
        },
    }) as const satisfies Record<string, EngineDataBucket>
