import { EngineArchetypeDataName } from '@sonolus/core'
import { options } from '../../../configuration/options.js'
import { note } from '../../note.js'
import { panel } from '../../panel.js'
import { scaledScreen } from '../../scaledScreen.js'
import { getZ, layer } from '../../skin.js'

export abstract class Note extends Archetype {
    abstract isDai: boolean

    abstract sprites: {
        note: SkinSprite
        fallback: SkinSprite
    }

    import = this.defineImport({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    render() {
        const time = bpmChanges.at(this.import.beat).time
        const pos = panel.getPos(time)

        const z = getZ(layer.note, time)

        const layout = this.noteLayout.add(pos)

        if (this.useFallbackSprite) {
            this.sprites.fallback.draw(layout, z, 1)
        } else {
            this.sprites.note.draw(layout, z, 1)
        }

        return { time, pos }
    }

    get h() {
        return 0.3 * (this.isDai ? note.radius.dai : note.radius.normal) * options.noteSize
    }

    get w() {
        return this.h * scaledScreen.hToW
    }

    get noteLayout() {
        return new Rect({
            l: -this.w,
            r: this.w,
            t: -this.h,
            b: this.h,
        })
    }

    get useFallbackSprite() {
        return !this.sprites.note.exists
    }
}
