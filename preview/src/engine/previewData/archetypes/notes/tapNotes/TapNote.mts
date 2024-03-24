import { chart } from '../../../chart.mjs'
import { Note } from '../Note.mjs'

export abstract class TapNote extends Note {
    preprocess() {
        chart.beats = Math.max(chart.beats, this.import.beat)
        chart.duration = Math.max(chart.duration, bpmChanges.at(this.import.beat).time)
    }
}
