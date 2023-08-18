import { noteDisplay } from '../../components/noteDisplay.mjs'

export const donNoteFall = {
    enter() {
        noteDisplay.showFall('don')
    },

    exit() {
        noteDisplay.clear()
    },
}
