import { EngineInfo } from 'sonolus-core'
import { Resource } from './Resource.cjs'

export { osuToTJC } from './osu/convert.cjs'
export { tjaToTJC } from './tja/convert.cjs'
export { tjcToLevelData } from './tjc/convert.cjs'

export const version = '1.0.0'

export const engineInfo = {
    name: 'taiko',
    version: 8,
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
} as const satisfies Partial<EngineInfo>

export const engineConfiguration = new Resource('EngineConfiguration')
export const engineData = new Resource('EngineData')
export const engineThumbnail = new Resource('thumbnail.png')