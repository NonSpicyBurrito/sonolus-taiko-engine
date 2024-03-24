import { chart } from '../../../chart.mjs'
import { Note } from '../Note.mjs'

export abstract class LongNote extends Note {
    longImport = this.defineImport({
        tailBeat: { name: 'tailBeat', type: Number },
    })

    preprocess() {
        chart.beats = Math.max(chart.beats, this.longImport.tailBeat)
        chart.duration = Math.max(chart.duration, bpmChanges.at(this.longImport.tailBeat).time)
    }
}
