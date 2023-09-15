import { chart } from '../../../chart.mjs'
import { Note } from '../Note.mjs'

export abstract class LongNote extends Note {
    longData = this.defineData({
        tailBeat: { name: 'tailBeat', type: Number },
    })

    preprocess() {
        chart.beats = Math.max(chart.beats, this.longData.tailBeat)
        chart.duration = Math.max(chart.duration, bpmChanges.at(this.longData.tailBeat).time)
    }
}
