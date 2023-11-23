import { Note } from '../Note.mjs'

export abstract class LongNote extends Note {
    longData = this.defineData({
        tailBeat: { name: 'tailBeat', type: Number },
    })
}
