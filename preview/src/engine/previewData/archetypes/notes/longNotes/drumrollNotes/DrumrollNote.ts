import { panel } from '../../../../panel.js'
import { getZ, layer } from '../../../../skin.js'
import { LongNote } from '../LongNote.js'

export abstract class DrumrollNote extends LongNote {
    abstract sprites: {
        note: SkinSprite
        fallback: SkinSprite
        tail: SkinSprite
        tailFallback: SkinSprite
        connection: SkinSprite
        connectionFallback: SkinSprite
    }

    render() {
        const { time, pos } = super.render()

        this.renderConnection()
        this.renderTail()

        return { time, pos }
    }

    renderConnection() {
        const t = {
            min: bpmChanges.at(this.import.beat).time,
            max: bpmChanges.at(this.longImport.tailBeat).time,
        }

        const index = {
            min: Math.floor(t.min / panel.w),
            max: Math.floor(t.max / panel.w),
        }

        const z = getZ(layer.note, t.min, 1)

        for (let i = index.min; i <= index.max; i++) {
            const y = i * panel.h

            const pt = {
                min: Math.max(t.min, i * panel.w),
                max: Math.min(t.max, (i + 1) * panel.w),
            }

            const layout = new Rect({
                l: pt.min - i * panel.w,
                r: pt.max - i * panel.w,
                t: -this.h,
                b: this.h,
            }).translate(0, y)

            if (this.useFallbackConnectionSprite) {
                this.sprites.connectionFallback.draw(layout.toQuad().swapRotate90(), z, 1)
            } else {
                this.sprites.connection.draw(layout, z, 1)
            }
        }
    }

    renderTail() {
        const time = bpmChanges.at(this.longImport.tailBeat).time
        const pos = panel.getPos(time)

        const z = getZ(layer.note, time, 2)

        const layout = this.noteLayout.add(pos)

        if (this.useFallbackTailSprite) {
            this.sprites.tailFallback.draw(layout, z, 1)
        } else {
            this.sprites.tail.draw(layout, z, 1)
        }
    }

    get useFallbackTailSprite() {
        return !this.sprites.tail.exists
    }

    get useFallbackConnectionSprite() {
        return !this.sprites.connection.exists
    }
}
