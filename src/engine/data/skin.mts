import { SkinSpriteName } from 'sonolus-core'

export const skin = defineSkin({
    sprites: {
        lane: SkinSpriteName.Lane,
        slot: SkinSpriteName.NoteSlot,

        drum: 'Taiko Drum',
        drumDonLeft: 'Taiko Drum Don Left',
        drumDonRight: 'Taiko Drum Don Right',
        drumKaLeft: 'Taiko Drum Ka Left',
        drumKaRight: 'Taiko Drum Ka Right',

        touchDrum: 'Taiko Touch Drum',

        don: 'Taiko Don',
        daiDon: 'Taiko Dai Don',
        donFallback: SkinSpriteName.NoteHeadRed,

        ka: 'Taiko Ka',
        daiKa: 'Taiko Dai Ka',
        kaFallback: SkinSpriteName.NoteHeadCyan,

        balloon: 'Taiko Balloon',
        daiBalloon: 'Taiko Dai Balloon',
        balloonFallback: SkinSpriteName.NoteHeadPurple,
        balloonAttachment: 'Taiko Balloon Attachment',

        drumroll: 'Taiko Drumroll',
        daiDrumroll: 'Taiko Dai Drumroll',
        drumrollFallback: SkinSpriteName.NoteHeadYellow,
        drumrollTail: 'Taiko Drumroll Tail',
        daiDrumrollTail: 'Taiko Dai Drumroll Tail',
        drumrollTailFallback: SkinSpriteName.NoteTailYellow,
        drumrollConnection: 'Taiko Drumroll Connection',
        daiDrumrollConnection: 'Taiko Dai Drumroll Connection',
        drumrollConnectionFallback: SkinSpriteName.NoteConnectionYellow,

        cover: SkinSpriteName.StageCover,
    },
})
