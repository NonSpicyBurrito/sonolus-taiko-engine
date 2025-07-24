import { panel } from './panel.js'

export const note = {
    radius: {
        get normal() {
            return (this.dai * 104) / 158
        },

        get dai() {
            return panel.h * 0.78
        },
    },
}
