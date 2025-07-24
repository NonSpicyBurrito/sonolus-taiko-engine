import { noteDisplay } from '../../components/noteDisplay.js'

export const donNoteIntro = {
    enter() {
        noteDisplay.showOverlay('don')
    },

    exit() {
        noteDisplay.clear()
    },
}
