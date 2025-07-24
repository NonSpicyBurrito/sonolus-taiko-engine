import { options } from '../configuration/options.js'
import { chart } from './chart.js'

export const panel = {
    get w() {
        return screen.aspectRatio / options.previewHorizontalScale
    },
    h: 5,

    get count() {
        return Math.ceil(chart.duration / this.w)
    },

    getX(time: number) {
        return time % this.w
    },

    getY(time: number) {
        return Math.floor(time / this.w) * this.h
    },

    getPos(time: number) {
        return new Vec(this.getX(time), this.getY(time))
    },
}
