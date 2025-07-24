import { NoteHit } from './NoteHit.js'

export class KaLeftNoteHit extends NoteHit {
    type = 'ka' as const
    direction = 'left' as const
}
