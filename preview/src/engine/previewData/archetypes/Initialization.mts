import { panel } from '../panel.mjs'
import { skin } from '../skin.mjs'

export class Initialization extends Archetype {
    preprocess() {
        const transform = Mat.identity
            .translate(0, panel.h / 2)
            .scale(screen.w / panel.w, -screen.h / 20)
            .translate(screen.l, screen.t)
        skin.transform.set(transform)

        const gap = 0.05
        const uiRect = screen.rect.shrink(gap, gap)

        ui.menu.set({
            anchor: uiRect.lt,
            pivot: { x: 0, y: 1 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.menu.scale),
            rotation: 0,
            alpha: ui.configuration.menu.alpha,
            background: true,
        })
    }
}
