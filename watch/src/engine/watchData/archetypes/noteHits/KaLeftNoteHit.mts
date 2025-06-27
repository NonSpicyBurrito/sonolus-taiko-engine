import { NoteHit } from './NoteHit.mjs'

export class KaLeftNoteHit extends NoteHit {
    type = 'ka' as const
    direction = 'left' as const
}
