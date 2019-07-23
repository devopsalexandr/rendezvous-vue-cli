import SearchService from "../services/SearchService";

export default {
    namespaced: true,

    state: {
        users: {
            data: null,
            meta: null,
            links: null
        },

        searchParams: {}
    },

    getters: {
        users(state) {
            return state.users;
        },

        currentPage(state) {
            if(state.users.meta) return state.users.meta.current_page;
        },

        lastPage(state) {
            if(state.users.meta) return state.users.meta.last_page;
        },

        searchParams(state) {
            return state.searchParams;
        }
    },

    mutations: {
        setUsers(state, users){
            state.users.data = users;
        },

        setMeta(state, meta){
            state.users.meta = meta;
        },

        setLinks(state, links){
            state.users.links = links;
        },

        setSearchParams(state, searchParams){
            state.searchParams = searchParams;
        },

        addUsers(state, users){
            state.users.data = state.users.data.concat(users);
        }
    },

    actions: {
        findUsers({ commit }, searchParams) {
            SearchService.getResults(searchParams).then((response) => {
                commit('setUsers', response.data.data);
                commit('setMeta', response.data.meta);
                commit('setLinks', response.data.links);
                commit('setSearchParams', searchParams);
            })
        },

        findMoreUsers({ commit, state }, page){
            SearchService.getResultsByPage(page, state.searchParams).then((response) => {
                commit('addUsers', response.data.data);
                commit('setMeta', response.data.meta);
                commit('setLinks', response.data.links);
            })
        }
    }
}