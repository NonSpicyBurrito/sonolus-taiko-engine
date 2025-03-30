import { SkinSpriteName } from '@sonolus/core'
import { panel } from './panel.mjs'

export const skin = defineSkin({
    sprites: {
        lane: SkinSpriteName.Lane,

        don: 'Taiko Don',
        daiDon: 'Taiko Dai Don',
        donFallback: SkinSpriteName.NoteHeadRed,

        ka: 'Taiko Ka',
        daiKa: 'Taiko Dai Ka',
        kaFallback: SkinSpriteName.NoteHeadCyan,

        balloon: 'Taiko Balloon',
        daiBalloon: 'Taiko Dai Balloon',
        balloonFallback: SkinSpriteName.NoteHeadPurple,
        balloonAttachment1: 'Taiko Balloon Attachment 1',

        drumroll: 'Taiko Drumroll',
        daiDrumroll: 'Taiko Dai Drumroll',
        drumrollFallback: SkinSpriteName.NoteHeadYellow,
        drumrollTail: 'Taiko Drumroll Tail',
        daiDrumrollTail: 'Taiko Dai Drumroll Tail',
        drumrollTailFallback: SkinSpriteName.NoteTailYellow,
        drumrollConnection: 'Taiko Drumroll Connection',
        daiDrumrollConnection: 'Taiko Dai Drumroll Connection',
        drumrollConnectionFallback: SkinSpriteName.NoteConnectionYellow,

        beatLine: SkinSpriteName.GridNeutral,
        bpmChangeLine: SkinSpriteName.GridPurple,
    },
})

export const layer = {
    note: 100,

    line: 10,

    stage: 0,
}

export const line = (sprite: SkinSprite, beat: number, a: number) => {
    const pos = panel.getPos(bpmChanges.at(beat).time)

    sprite.draw(
        new Rect({
            l: -0.0025,
            r: 0.0025,
            t: -1.5,
            b: 1.5,
        }).add(pos),
        layer.line,
        a,
    )
}

export const getZ = (layer: number, time: number, order = 0) => layer - time / 1000 - order / 100000
