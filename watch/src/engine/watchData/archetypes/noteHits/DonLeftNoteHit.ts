import { NoteHit } from './NoteHit.js'

export class DonLeftNoteHit extends NoteHit {
    type = 'don' as const
    direction = 'left' as const
}
