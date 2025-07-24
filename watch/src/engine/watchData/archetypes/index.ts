import { Initialization } from './Initialization.js'
import { Stage } from './Stage.js'
import { DaiBalloonNoteEffect } from './noteEffects/DaiBalloonNoteEffect.js'
import { DaiDonNoteEffect } from './noteEffects/DaiDonNoteEffect.js'
import { DaiKaNoteEffect } from './noteEffects/DaiKaNoteEffect.js'
import { NormalBalloonNoteEffect } from './noteEffects/NormalBalloonNoteEffect.js'
import { NormalDonNoteEffect } from './noteEffects/NormalDonNoteEffect.js'
import { NormalKaNoteEffect } from './noteEffects/NormalKaNoteEffect.js'
import { DonLeftNoteHit } from './noteHits/DonLeftNoteHit.js'
import { DonRightNoteHit } from './noteHits/DonRightNoteHit.js'
import { KaLeftNoteHit } from './noteHits/KaLeftNoteHit.js'
import { KaRightNoteHit } from './noteHits/KaRightNoteHit.js'
import { DaiBalloonNote } from './notes/longNotes/balloonNotes/DaiBalloonNote.js'
import { NormalBalloonNote } from './notes/longNotes/balloonNotes/NormalBalloonNote.js'
import { DaiDrumrollNote } from './notes/longNotes/drumrollNotes/DaiDrumrollNote.js'
import { NormalDrumrollNote } from './notes/longNotes/drumrollNotes/NormalDrumrollNote.js'
import { DaiDonNote } from './notes/tapNotes/donNotes/DaiDonNote.js'
import { NormalDonNote } from './notes/tapNotes/donNotes/NormalDonNote.js'
import { DaiKaNote } from './notes/tapNotes/kaNotes/DaiKaNote.js'
import { NormalKaNote } from './notes/tapNotes/kaNotes/NormalKaNote.js'

export const archetypes = defineArchetypes({
    Initialization,

    Stage,

    NormalDonNote,
    DaiDonNote,

    NormalKaNote,
    DaiKaNote,

    NormalBalloonNote,
    DaiBalloonNote,

    NormalDrumrollNote,
    DaiDrumrollNote,

    NormalDonNoteEffect,
    DaiDonNoteEffect,
    NormalKaNoteEffect,
    DaiKaNoteEffect,
    NormalBalloonNoteEffect,
    DaiBalloonNoteEffect,

    DonLeftNoteHit,
    DonRightNoteHit,
    KaLeftNoteHit,
    KaRightNoteHit,
})
