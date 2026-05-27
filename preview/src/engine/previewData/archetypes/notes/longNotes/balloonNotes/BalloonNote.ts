import { layer, skin } from '../../../../skin.js'
import { LongNote } from '../LongNote.js'

export abstract class BalloonNote extends LongNote {
    abstract sprites: {
        note: SkinSprite
        fallback: SkinSprite
    }

    render() {
        const { time, pos } = super.render()

        const layout = new Rect({
            l: 0,
            r: (this.w * 264) / 26,
            t: (-this.h * 124) / 26,
            b: (this.h * 124) / 26,
        })
            .translate(0.7 * this.w, 0)
            .add(pos)

        skin.sprites.balloonAttachment1.draw(layout, [layer.note, -time, 1], 1)

        return { time, pos }
    }
}
