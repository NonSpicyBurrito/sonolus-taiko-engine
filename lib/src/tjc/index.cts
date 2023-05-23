export type TJC = {
    offset: number
    objects: ChartObject[]
}

export type ChartObject = BPMObject | DonNote | KaNote | BalloonNote | DrumrollNote

type ObjectBase = {
    beat: number
}

export type BPMObject = ObjectBase & {
    type: 'bpm'
    bpm: number
}

type NoteBase = ObjectBase & {
    isDai: boolean
    speed: number
}

export type DonNote = NoteBase & {
    type: 'don'
}

export type KaNote = NoteBase & {
    type: 'ka'
}

type LongNoteBase = NoteBase & {
    tailBeat: number
}

export type BalloonNote = LongNoteBase & {
    type: 'balloon'
}

export type DrumrollNote = LongNoteBase & {
    type: 'drumroll'
}
