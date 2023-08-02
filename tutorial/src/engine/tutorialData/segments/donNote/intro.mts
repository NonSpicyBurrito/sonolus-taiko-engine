import { noteDisplay } from '../../components/noteDisplay.mjs'

export const donNoteIntro = {
    enter() {
        noteDisplay.showOverlay('don')
    },

    exit() {
        noteDisplay.clear()
    },
}
