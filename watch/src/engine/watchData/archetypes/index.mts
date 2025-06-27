import { Initialization } from './Initialization.mjs'
import { Stage } from './Stage.mjs'
import { DaiBalloonNoteEffect } from './noteEffects/DaiBalloonNoteEffect.mjs'
import { DaiDonNoteEffect } from './noteEffects/DaiDonNoteEffect.mjs'
import { DaiKaNoteEffect } from './noteEffects/DaiKaNoteEffect.mjs'
import { NormalBalloonNoteEffect } from './noteEffects/NormalBalloonNoteEffect.mjs'
import { NormalDonNoteEffect } from './noteEffects/NormalDonNoteEffect.mjs'
import { NormalKaNoteEffect } from './noteEffects/NormalKaNoteEffect.mjs'
import { DonLeftNoteHit } from './noteHits/DonLeftNoteHit.mjs'
import { DonRightNoteHit } from './noteHits/DonRightNoteHit.mjs'
import { KaLeftNoteHit } from './noteHits/KaLeftNoteHit.mjs'
import { KaRightNoteHit } from './noteHits/KaRightNoteHit.mjs'
import { DaiBalloonNote } from './notes/longNotes/balloonNotes/DaiBalloonNote.mjs'
import { NormalBalloonNote } from './notes/longNotes/balloonNotes/NormalBalloonNote.mjs'
import { DaiDrumrollNote } from './notes/longNotes/drumrollNotes/DaiDrumrollNote.mjs'
import { NormalDrumrollNote } from './notes/longNotes/drumrollNotes/NormalDrumrollNote.mjs'
import { DaiDonNote } from './notes/tapNotes/donNotes/DaiDonNote.mjs'
import { NormalDonNote } from './notes/tapNotes/donNotes/NormalDonNote.mjs'
import { DaiKaNote } from './notes/tapNotes/kaNotes/DaiKaNote.mjs'
import { NormalKaNote } from './notes/tapNotes/kaNotes/NormalKaNote.mjs'

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
