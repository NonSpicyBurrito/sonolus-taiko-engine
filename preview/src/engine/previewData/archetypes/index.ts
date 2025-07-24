import { EngineArchetypeName } from '@sonolus/core'
import { BpmChange } from './BpmChange.js'
import { Initialization } from './Initialization.js'
import { Stage } from './Stage.js'
import { DaiBalloonNote } from './notes/longNotes/balloonNotes/DaiBalloonNote.js'
import { NormalBalloonNote } from './notes/longNotes/balloonNotes/NormalBalloonNote.js'
import { DaiDrumrollNote } from './notes/longNotes/drumrollNotes/DaiDrumrollNote.js'
import { NormalDrumrollNote } from './notes/longNotes/drumrollNotes/NormalDrumrollNote.js'
import { DaiDonNote } from './notes/tapNotes/DaiDonNote.js'
import { DaiKaNote } from './notes/tapNotes/DaiKaNote.js'
import { NormalDonNote } from './notes/tapNotes/NormalDonNote.js'
import { NormalKaNote } from './notes/tapNotes/NormalKaNote.js'

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
