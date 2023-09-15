import { chart } from '../../../chart.mjs'
import { Note } from '../Note.mjs'

export abstract class TapNote extends Note {
    preprocess() {
        chart.beats = Math.max(chart.beats, this.data.beat)
        chart.duration = Math.max(chart.duration, bpmChanges.at(this.data.beat).time)
    }
}
