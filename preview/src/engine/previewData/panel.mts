import { chart } from './chart.mjs'

export const panel = {
    get w() {
        return screen.aspectRatio
    },

    get count() {
        return Math.ceil(chart.duration / this.w)
    },

    getX(time: number) {
        return time % this.w
    },

    getY(time: number) {
        return Math.floor(time / this.w)
    },

    getPos(time: number) {
        return new Vec(this.getX(time), this.getY(time))
    },
}
