import { buckets } from '../buckets.mjs'
import { particle } from '../particle.mjs'
import { skin } from '../skin.mjs'
import { archetypes } from './index.mjs'
import { hitTimes, note, scaledScreen, stage } from './shared.mjs'
import { windows } from './windows.mjs'

export class Initialization extends Archetype {
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

        const transform = Mat.identity.scale(-w, w).translate(r, m)
        skin.transform.set(transform)
        particle.transform.set(transform)

        hitTimes.any = -9999
        hitTimes.don.left = -9999
        hitTimes.don.right = -9999
        hitTimes.ka.left = -9999
        hitTimes.ka.right = -9999

        const toMs = ({ min, max }: JudgmentWindow) => ({
            min: Math.round(min * 1000),
            max: Math.round(max * 1000),
        })

        for (const bucket of [buckets.donNote, buckets.kaNote]) {
            bucket.set({
                perfect: toMs(windows.perfect),
                great: toMs(windows.great),
                good: toMs(windows.good),
            })
        }

        score.base.set({
            perfect: 1,
            great: 0.5,
            good: 0.1,
        })
        score.consecutive.great.set({
            multiplier: 0.1,
            step: 10,
            cap: 100,
        })

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
            horizontalAlign: HorizontalAlign.Center,
            background: true,
        })

        ui.metric.primary.bar.set({
            anchor: { x: screen.r, y: m + h },
            pivot: { x: 1, y: 0 },
            size: { x: screen.w / 2, y: 0.15 * ui.configuration.metric.primary.scale },
            rotation: 0,
            alpha: ui.configuration.metric.primary.alpha,
            horizontalAlign: HorizontalAlign.Left,
            background: true,
        })
        ui.metric.primary.value.set({
            anchor: new Vec(screen.r, m + h).add(
                new Vec(-0.035, 0.035).mul(ui.configuration.metric.primary.scale),
            ),
            pivot: { x: 1, y: 0 },
            size: new Vec(0, 0.08).mul(ui.configuration.metric.primary.scale),
            rotation: 0,
            alpha: ui.configuration.metric.primary.alpha,
            horizontalAlign: HorizontalAlign.Right,
            background: false,
        })

        ui.combo.value.set({
            anchor: { x: r - w, y: m - h * 1.7 },
            pivot: { x: 0.5, y: 0.5 },
            size: new Vec(0, h * 0.5).mul(ui.configuration.combo.scale),
            rotation: 0,
            alpha: ui.configuration.combo.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: false,
        })
        ui.combo.text.set({
            anchor: { x: r - w, y: m - h * 1.7 },
            pivot: { x: 0.5, y: 2.5 },
            size: new Vec(0, h * 0.25).mul(ui.configuration.combo.scale),
            rotation: 0,
            alpha: ui.configuration.combo.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: false,
        })

        ui.judgment.set({
            anchor: { x: r - w, y: m + h },
            pivot: { x: 0.5, y: 0.5 },
            size: new Vec(0, h * 0.25).mul(ui.configuration.judgment.scale),
            rotation: 0,
            alpha: ui.configuration.judgment.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: false,
        })

        for (const archetype of Object.values(archetypes)) {
            if (!('globalPreprocess' in archetype)) continue

            archetype.globalPreprocess()
        }
    }

    spawnOrder() {
        return 0
    }

    updateSequential() {
        this.despawn = true
    }
}
