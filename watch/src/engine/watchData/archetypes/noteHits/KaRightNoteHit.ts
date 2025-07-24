import { NoteHit } from './NoteHit.js'

export class KaRightNoteHit extends NoteHit {
    type = 'ka' as const
    direction = 'right' as const
}
