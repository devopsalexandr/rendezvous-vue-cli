export default {
    namespaced: true,

    state: {
        editing: false,
        saved: false
    },

    mutations: {
        toggleEditing(state, bool) {
            state.editing = bool;
        },

        makeSaved(state, bool){
            state.saved = bool;
        }
    },

    getters: {
        editing(state) {
            return state.editing;
        },

        saved(state) {
            return state.saved;
        }
    }
}