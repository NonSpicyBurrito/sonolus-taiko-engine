import { noteDisplay } from '../../components/noteDisplay.js'

export const kaNoteFall = {
    enter() {
        noteDisplay.showFall('ka')
    },

    exit() {
        noteDisplay.clear()
    },
}
