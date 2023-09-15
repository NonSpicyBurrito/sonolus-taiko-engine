import { chart } from '../chart.mjs'
import { panel } from '../panel.mjs'
import { print } from '../print.mjs'
import { layer, line, skin } from '../skin.mjs'

export class Stage extends Archetype {
    preprocessOrder = 1
    preprocess() {
        canvas.set({
            scroll: Scroll.TopToBottom,
            size: (panel.count * screen.h) / 4,
        })
    }

    render() {
        this.renderPanels()

        this.renderBeats()

        this.printTimes()
        this.printMeasures()
    }

    renderPanels() {
        for (let i = 0; i < panel.count; i++) {
            const y = i * panel.h

            skin.sprites.lane.draw(
                new Rect({
                    l: 0,
                    r: panel.w,
                    t: y - 1.5,
                    b: y + 1.5,
                })
                    .toQuad()
                    .swapRotate90(),
                layer.stage,
                1,
            )
        }
    }

    renderBeats() {
        for (let i = 0; i <= Math.floor(chart.beats); i++) {
            line(skin.sprites.beatLine, i, i % 4 === 0 ? 0.25 : 0.125)
        }
    }

    printTimes() {
        for (let i = 1; i <= Math.floor(chart.duration); i++) {
            print(i, i, PrintFormat.Time, 0, PrintColor.Neutral, 'top')
        }
    }

    printMeasures() {
        for (let i = 4; i <= Math.floor(chart.beats); i += 4) {
            print(
                i / 4 + 1,
                bpmChanges.at(i).time,
                PrintFormat.MeasureCount,
                0,
                PrintColor.Neutral,
                'bottom',
            )
        }
    }
}
