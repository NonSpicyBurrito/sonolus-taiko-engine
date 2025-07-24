import { noteDisplay } from '../../components/noteDisplay.js'

export const kaNoteIntro = {
    enter() {
        noteDisplay.showOverlay('ka')
    },

    exit() {
        noteDisplay.clear()
    },
}
