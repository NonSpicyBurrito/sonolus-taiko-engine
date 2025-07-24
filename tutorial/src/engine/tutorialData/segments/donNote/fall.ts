import { noteDisplay } from '../../components/noteDisplay.js'

export const donNoteFall = {
    enter() {
        noteDisplay.showFall('don')
    },

    exit() {
        noteDisplay.clear()
    },
}
