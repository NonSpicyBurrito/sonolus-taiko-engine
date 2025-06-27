import { NoteHit } from './NoteHit.mjs'

export class KaRightNoteHit extends NoteHit {
    type = 'ka' as const
    direction = 'right' as const
}
