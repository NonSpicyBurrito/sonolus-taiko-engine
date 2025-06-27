import { NoteHit } from './NoteHit.mjs'

export class DonRightNoteHit extends NoteHit {
    type = 'don' as const
    direction = 'right' as const
}
