import localforage from "localforage";
import AuthService from "../services/AuthService";

export default {
    namespaced: true,

    state: {
        user: {
            isAuthenticated: false,
            data: null
        }
    },

    getters: {
        user(state) {
            return state.user;
        }
    },

    mutations: {

        setToken(state, token) {
            if(!token){
                localforage.removeItem('token');
            }

            localforage.setItem('token', token)
        },

        setAuthenticated(state, bool) {
            state.user.authenticated = bool;
        },

        setUserData(state, user) {
            state.user.data = user;
        }

    },

    actions: {

        login({ commit, dispatch }, {payload, context}) {
            // return axios.post('http://127.0.0.1:8000/api/login', payload).then((response) => {
            //
            //     dispatch('setToken', response.data.meta.token);
            //
            //     commit('setAuthenticated', true);
            //     commit('setUserData', response.data.data);
            //
            // }).catch((error) => {
            //     context.errors = error.response.data.errors;
            //     throw error
            // });

            AuthService.login(payload.email, payload.password).then((response) => {
                console.log(response.data);
            });
        },

    }
}