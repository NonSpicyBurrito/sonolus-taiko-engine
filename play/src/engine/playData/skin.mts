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
        balloonAttachment1: 'Taiko Balloon Attachment 1',
        balloonAttachment2: 'Taiko Balloon Attachment 2',
        balloonAttachment3: 'Taiko Balloon Attachment 3',
        balloonAttachment4: 'Taiko Balloon Attachment 4',
        balloonAttachment5: 'Taiko Balloon Attachment 5',
        balloonAttachment6: 'Taiko Balloon Attachment 6',
        balloonAttachment7: 'Taiko Balloon Attachment 7',
        balloonAttachment8: 'Taiko Balloon Attachment 8',

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

export const layer = {
    cover: 1000,

    effect: 110,

    note: 100,

    slot: 21,
    lane: 20,

    drumHit: 11,
    drum: 10,

    touchDrum: 0,
}
