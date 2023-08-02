import { particle } from '../particle.mjs'
import { hand, note, scaledScreen, stage } from '../shared.mjs'
import { skin } from '../skin.mjs'

export const initialization = {
    preprocess() {
        const w = screen.w
        const h = screen.h / 8

        const r = screen.r + h
        const m = Math.lerp(screen.b, screen.t, 0.625)

        scaledScreen.l = (screen.l - r) / -w
        scaledScreen.r = (screen.r - r) / -w
        scaledScreen.t = (screen.t - m) / w
        scaledScreen.b = (screen.b - m) / w

        stage.h = h / w

        note.radius.dai = stage.h * 0.78
        note.radius.normal = (note.radius.dai * 104) / 158

        new Vec(0, -1)
            .rotate(Math.PI / 3)
            .mul(0.25 * ui.configuration.instruction.scale)
            .translate(0, -0.5)
            .copyTo(hand.position)

        const transform = Mat.identity.scale(-w, w).translate(r, m)
        skin.transform.set(transform)
        particle.transform.set(transform)

        const gap = 0.05
        const uiRect = new Rect({
            l: screen.l + gap,
            r: screen.r - gap,
            b: screen.b + gap,
            t: screen.t - gap,
        })

        ui.menu.set({
            anchor: uiRect.lt,
            pivot: { x: 0, y: 1 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.menu.scale),
            rotation: 0,
            alpha: ui.configuration.menu.alpha,
            background: true,
        })

        ui.navigation.previous.set({
            anchor: { x: uiRect.l, y: -0.5 },
            pivot: { x: 0, y: 0.5 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.navigation.scale),
            rotation: 0,
            alpha: ui.configuration.navigation.alpha,
            background: true,
        })
        ui.navigation.next.set({
            anchor: { x: uiRect.r, y: -0.5 },
            pivot: { x: 1, y: 0.5 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.navigation.scale),
            rotation: 0,
            alpha: ui.configuration.navigation.alpha,
            background: true,
        })

        ui.instruction.set({
            anchor: { x: 0, y: 0.25 },
            pivot: { x: 0.5, y: 0.5 },
            size: new Vec(1.2, 0.15).mul(ui.configuration.instruction.scale),
            rotation: 0,
            alpha: ui.configuration.instruction.alpha,
            background: true,
        })
    },
}
