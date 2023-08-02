import { noteDisplay } from '../../components/noteDisplay.mjs'

export const kaNoteIntro = {
    enter() {
        noteDisplay.showOverlay('ka')
    },

    exit() {
        noteDisplay.clear()
    },
}
