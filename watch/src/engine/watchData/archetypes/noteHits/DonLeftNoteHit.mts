import { NoteHit } from './NoteHit.mjs'

export class DonLeftNoteHit extends NoteHit {
    type = 'don' as const
    direction = 'left' as const
}
