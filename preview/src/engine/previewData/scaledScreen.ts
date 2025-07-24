import { panel } from './panel.js'

export const scaledScreen = {
    get hToW() {
        return panel.w / screen.aspectRatio / 20
    },
}
