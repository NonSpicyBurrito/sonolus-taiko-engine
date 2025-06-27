import { bucketWindows } from '../../../../../shared/src/engine/data/windows.mjs'
import { options } from '../../configuration/options.mjs'
import { buckets } from '../buckets.mjs'
import { drum } from '../drum.mjs'
import { hitTimes } from '../hitTimes.mjs'
import { note } from '../note.mjs'
import { particle } from '../particle.mjs'
import { scaledScreen } from '../scaledScreen.mjs'
import { skin } from '../skin.mjs'
import { stage } from '../stage.mjs'
import { archetypes } from './index.mjs'

export class Initialization extends Archetype {
    preprocess() {
        const w = (options.stageDirection ? screen.h : screen.w) * options.slotPosition
        const h = options.stageDirection ? screen.w / 16 : screen.h / 8

        const r = (options.stageDirection ? screen.t : screen.r) + h
        const m = options.stageDirection
            ? Math.lerp(screen.l, screen.r, 0.5625)
            : Math.lerp(screen.b, screen.t, 0.625)

        scaledScreen.l = ((options.stageDirection ? screen.b : screen.l) - r) / -w
        scaledScreen.r = ((options.stageDirection ? screen.t : screen.r) - r) / -w
        scaledScreen.t = ((options.stageDirection ? screen.r : screen.t) - m) / w
        scaledScreen.b = ((options.stageDirection ? screen.l : screen.b) - m) / w

        stage.h = h / w

        drum.radius = options.stageDirection
            ? scaledScreen.l - scaledScreen.r
            : scaledScreen.t - scaledScreen.b
        drum.center.x = options.stageDirection ? screen.r : 0
        drum.center.y = options.stageDirection ? 0 : screen.b

        note.radius.dai = stage.h * 0.78
        note.radius.normal = (note.radius.dai * 104) / 158

        const transform = Mat.identity
            .scale(-w, w)
            .translate(r, m)
            .rotate(options.stageDirection ? Math.PI / 2 : 0)
        skin.transform.set(transform)
        particle.transform.set(transform)

        hitTimes.any = -9999
        hitTimes.don.left = -9999
        hitTimes.don.right = -9999
        hitTimes.ka.left = -9999
        hitTimes.ka.right = -9999

        for (const bucket of [buckets.donNote, buckets.kaNote]) {
            bucket.set(bucketWindows)
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
        const uiRect = screen.rect.shrink(gap, gap)

        if (options.stageDirection) {
            ui.menu.set({
                anchor: uiRect.lb,
                pivot: { x: 0, y: 1 },
                size: new Vec(0.15, 0.15).mul(ui.configuration.menu.scale),
                rotation: 90,
                alpha: ui.configuration.menu.alpha,
                horizontalAlign: HorizontalAlign.Center,
                background: true,
            })

            ui.metric.primary.bar.set({
                anchor: { x: -m - h, y: screen.t },
                pivot: { x: 1, y: 0 },
                size: { x: screen.h / 2, y: 0.15 * ui.configuration.metric.primary.scale },
                rotation: 90,
                alpha: ui.configuration.metric.primary.alpha,
                horizontalAlign: HorizontalAlign.Left,
                background: true,
            })
            ui.metric.primary.value.set({
                anchor: new Vec(-m - h, screen.t).add(
                    new Vec(-0.035, -0.035).mul(ui.configuration.metric.primary.scale),
                ),
                pivot: { x: 1, y: 0 },
                size: new Vec(0, 0.08).mul(ui.configuration.metric.primary.scale),
                rotation: 90,
                alpha: ui.configuration.metric.primary.alpha,
                horizontalAlign: HorizontalAlign.Right,
                background: false,
            })

            ui.combo.value.set({
                anchor: { x: -m + h * 1.7, y: r - w },
                pivot: { x: 0.5, y: 0.5 },
                size: new Vec(0, h * 0.5).mul(ui.configuration.combo.scale),
                rotation: 90,
                alpha: ui.configuration.combo.alpha,
                horizontalAlign: HorizontalAlign.Center,
                background: false,
            })
            ui.combo.text.set({
                anchor: { x: -m + h * 1.7, y: r - w },
                pivot: { x: 0.5, y: 2.5 },
                size: new Vec(0, h * 0.25).mul(ui.configuration.combo.scale),
                rotation: 90,
                alpha: ui.configuration.combo.alpha,
                horizontalAlign: HorizontalAlign.Center,
                background: false,
            })

            ui.judgment.set({
                anchor: { x: -m - h, y: r - w },
                pivot: { x: 0.5, y: 0.5 },
                size: new Vec(0, h * 0.25).mul(ui.configuration.judgment.scale),
                rotation: 90,
                alpha: ui.configuration.judgment.alpha,
                horizontalAlign: HorizontalAlign.Center,
                background: false,
            })
        } else {
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
        }

        for (const archetype of Object.values(archetypes)) {
            if (!('globalPreprocess' in archetype)) continue

            archetype.globalPreprocess()
        }
    }

    spawnOrder() {
        return 0
    }

    updateSequential() {
        archetypes.InputManager.spawn({})

        this.despawn = true
    }
}
