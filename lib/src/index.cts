import { DatabaseEngineItem } from '@sonolus/core'
import { resolve } from 'node:path'

export { osuToTJC } from './osu/convert.cjs'
export { tjaToTJC } from './tja/convert.cjs'
export { tjcToLevelData } from './tjc/convert.cjs'
export * from './tjc/index.cjs'

export const version = '1.3.0'

export const databaseEngineItem = {
    name: 'taiko',
    version: 12,
    title: {
        en: 'Taiko',
        ja: '太鼓',
        ko: '태고의',
        zhs: '太鼓',
        zht: '太鼓',
    },
    subtitle: {
        en: 'Taiko no Tatsujin',
        ja: '太鼓の達人',
        ko: '태고의 달인',
        zhs: '太鼓达人',
        zht: '太鼓達人',
    },
    author: {
        en: 'Burrito',
    },
    description: {
        en: [
            'A recreation of Taiko no Tatsujin engine in Sonolus.',
            '',
            'Version:',
            version,
            '',
            'GitHub Repository:',
            'https://github.com/NonSpicyBurrito/sonolus-taiko-engine',
        ].join('\n'),
    },
} as const satisfies Partial<DatabaseEngineItem>

export const engineConfigurationPath = resolve(__dirname, 'EngineConfiguration')
export const enginePlayDataPath = resolve(__dirname, 'EnginePlayData')
export const engineWatchDataPath = resolve(__dirname, 'EngineWatchData')
export const enginePreviewDataPath = resolve(__dirname, 'EnginePreviewData')
export const engineTutorialDataPath = resolve(__dirname, 'EngineTutorialData')
export const engineThumbnailPath = resolve(__dirname, 'thumbnail.png')
