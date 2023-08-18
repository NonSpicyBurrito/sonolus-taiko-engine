import { note } from '../note.mjs'
import { scaledScreen } from '../scaledScreen.mjs'
import { layer, skin } from '../skin.mjs'
import { stage } from '../stage.mjs'

const sprites = {
    lane: skin.sprites.lane,
    slot: skin.sprites.slot,
}

export const stageDisplay = {
    update() {
        const layouts = {
            lane: {
                x1: scaledScreen.l,
                y1: stage.h,
                x2: scaledScreen.r,
                y2: stage.h,
                x3: scaledScreen.r,
                y3: -stage.h,
                x4: scaledScreen.l,
                y4: -stage.h,
            },
            slot: new Rect({
                l: note.radius.dai,
                r: -note.radius.dai,
                t: note.radius.dai,
                b: -note.radius.dai,
            }).translate(1, 0),
        }

        sprites.lane.draw(layouts.lane, layer.lane, 1)
        sprites.slot.draw(layouts.slot, layer.slot, 1)
    },
}
