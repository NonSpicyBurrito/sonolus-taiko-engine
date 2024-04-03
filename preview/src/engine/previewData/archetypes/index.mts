import { EngineArchetypeName } from '@sonolus/core'
import { BpmChange } from './BpmChange.mjs'
import { Initialization } from './Initialization.mjs'
import { Stage } from './Stage.mjs'
import { DaiBalloonNote } from './notes/longNotes/balloonNotes/DaiBalloonNote.mjs'
import { NormalBalloonNote } from './notes/longNotes/balloonNotes/NormalBalloonNote.mjs'
import { DaiDrumrollNote } from './notes/longNotes/drumrollNotes/DaiDrumrollNote.mjs'
import { NormalDrumrollNote } from './notes/longNotes/drumrollNotes/NormalDrumrollNote.mjs'
import { DaiDonNote } from './notes/tapNotes/DaiDonNote.mjs'
import { DaiKaNote } from './notes/tapNotes/DaiKaNote.mjs'
import { NormalDonNote } from './notes/tapNotes/NormalDonNote.mjs'
import { NormalKaNote } from './notes/tapNotes/NormalKaNote.mjs'

export const archetypes = defineArchetypes({
    Initialization,

    [EngineArchetypeName.BpmChange]: BpmChange,

    Stage,

    NormalDonNote,
    DaiDonNote,

    NormalKaNote,
    DaiKaNote,

    NormalBalloonNote,
    DaiBalloonNote,

    NormalDrumrollNote,
    DaiDrumrollNote,
})
