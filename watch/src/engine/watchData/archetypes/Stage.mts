import { options } from '../../configuration/options.mjs'
import { hitTimes, resetHitTimes } from '../hitTimes.mjs'
import { note } from '../note.mjs'
import { scaledScreen } from '../scaledScreen.mjs'
import { layer, skin } from '../skin.mjs'
import { stage } from '../stage.mjs'

export class Stage extends Archetype {
    spawnTime() {
        return -999999
    }

    despawnTime() {
        return 999999
    }

    updateSequential() {
        if (time.skip) resetHitTimes()
    }

    updateParallel() {
        this.drawStage()
        this.drawDrum()
        this.drawTouchDrum()

        this.drawStageCover()
    }

    drawStage() {
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

        skin.sprites.lane.draw(layouts.lane, layer.lane, 1)
        skin.sprites.slot.draw(layouts.slot, layer.slot, 1)
    }

    drawDrum() {
        const parts = [
            [skin.sprites.drumDonLeft, hitTimes.don],
            [skin.sprites.drumDonRight, hitTimes.don],
            [skin.sprites.drumKaLeft, hitTimes.ka],
            [skin.sprites.drumKaRight, hitTimes.ka],
        ] as const

        for (const [sprite] of parts) {
            if (!sprite.exists) return
        }

        const h = stage.h
        const w = (h * 138) / 162

        const layout = new Rect({
            l: w,
            r: -w,
            t: h,
            b: -h,
        }).translate(1, -2 * h)

        skin.sprites.drum.draw(layout, layer.drum, 1)

        for (const [sprite, hitTime] of parts) {
            sprite.draw(layout, layer.drumHit, 1 - this.scaleHitTime(hitTime))
        }
    }

    drawTouchDrum() {
        if (!skin.sprites.touchDrum.exists) return

        const h = (scaledScreen.t - scaledScreen.b) * options.drumSize
        const w = (h * 842) / (2 * 436)

        const layout = new Rect({
            l: Math.lerp(scaledScreen.l, scaledScreen.r, 0.5) + w,
            r: Math.lerp(scaledScreen.l, scaledScreen.r, 0.5) - w,
            t: scaledScreen.b + h,
            b: scaledScreen.b,
        }).translate(0, Math.lerp(-0.1 * h, 0, this.scaleHitTime(hitTimes.any)))

        skin.sprites.touchDrum.draw(layout, layer.touchDrum, 1)
    }

    drawStageCover() {
        if (options.stageCover <= 0) return

        skin.sprites.cover.draw(
            new Rect({
                l: Math.lerp(scaledScreen.r, 1, options.stageCover),
                r: scaledScreen.r,
                t: -stage.h,
                b: stage.h,
            }),
            layer.cover,
            1,
        )
    }

    scaleHitTime(hitTime: number) {
        return Math.unlerpClamped(hitTime, hitTime + 0.1, time.now)
    }
}
