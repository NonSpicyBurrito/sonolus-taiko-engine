import { getZ, layer, skin } from '../../../../skin.mjs'
import { LongNote } from '../LongNote.mjs'

export abstract class BalloonNote extends LongNote {
    abstract sprites: {
        note: SkinSprite
        fallback: SkinSprite
    }

    render() {
        const { time, pos } = super.render()

        const z = getZ(layer.note, time, -1)

        const layout = new Rect({
            l: 0,
            r: (this.w * 264) / 26,
            t: (-this.h * 124) / 26,
            b: (this.h * 124) / 26,
        })
            .translate(0.7 * this.w, 0)
            .add(pos)

        skin.sprites.balloonAttachment1.draw(layout, z, 1)

        return { time, pos }
    }
}
