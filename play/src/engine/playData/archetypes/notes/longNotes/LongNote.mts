import { Note } from '../Note.mjs'

export abstract class LongNote extends Note {
    longImport = this.defineImport({
        tailBeat: { name: 'tailBeat', type: Number },
    })
}
