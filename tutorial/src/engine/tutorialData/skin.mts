import { SkinSpriteName } from '@sonolus/core'

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
        donFallback: SkinSpriteName.NoteHeadRed,

        ka: 'Taiko Ka',
        kaFallback: SkinSpriteName.NoteHeadCyan,
    },
})

export const layer = {
    effect: 110,

    note: 100,

    slot: 21,
    lane: 20,

    drumHit: 11,
    drum: 10,

    touchDrum: 0,
}
