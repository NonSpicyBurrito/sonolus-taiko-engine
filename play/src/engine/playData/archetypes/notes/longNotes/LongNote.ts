import { Note } from '../Note.js'

export abstract class LongNote extends Note {
    longImport = this.defineImport({
        tailBeat: { name: 'tailBeat', type: Number },
    })
}
