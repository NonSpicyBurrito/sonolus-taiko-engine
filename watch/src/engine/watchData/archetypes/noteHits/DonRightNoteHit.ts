import { NoteHit } from './NoteHit.js'

export class DonRightNoteHit extends NoteHit {
    type = 'don' as const
    direction = 'right' as const
}
