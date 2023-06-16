export type TJC = {
    offset: number
    objects: TJCObject[]
}

export type TJCObject =
    | TJCBpmChangeObject
    | TJCDonNote
    | TJCKaNote
    | TJCBalloonNote
    | TJCDrumrollNote

type BaseTJCObject = {
    beat: number
}

export type TJCBpmChangeObject = BaseTJCObject & {
    type: 'bpm'
    bpm: number
}

type BaseTJCNote = BaseTJCObject & {
    isDai: boolean
    speed: number
}

export type TJCDonNote = BaseTJCNote & {
    type: 'don'
}

export type TJCKaNote = BaseTJCNote & {
    type: 'ka'
}

type BaseTJCLongNote = BaseTJCNote & {
    tailBeat: number
}

export type TJCBalloonNote = BaseTJCLongNote & {
    type: 'balloon'
}

export type TJCDrumrollNote = BaseTJCLongNote & {
    type: 'drumroll'
}
