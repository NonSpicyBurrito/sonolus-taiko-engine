import { noteDisplay } from '../../components/noteDisplay.mjs'

export const kaNoteFall = {
    enter() {
        noteDisplay.showFall('ka')
    },

    exit() {
        noteDisplay.clear()
    },
}
