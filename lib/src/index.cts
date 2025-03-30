import { DatabaseEngineItem } from '@sonolus/core'

export { osuToTJC } from './osu/convert.cjs'
export { tjaToTJC } from './tja/convert.cjs'
export { tjcToLevelData } from './tjc/convert.cjs'
export * from './tjc/index.cjs'

export const version = '1.5.3'

export const databaseEngineItem = {
    name: 'taiko',
    version: 13,
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
        en: 'Burrito#1000',
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
