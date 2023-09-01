import { panel } from './panel.mjs'

export const scaledScreen = {
    get hToW() {
        return panel.w / screen.aspectRatio / 4
    },
}
