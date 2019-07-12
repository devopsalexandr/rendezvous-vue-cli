import localforage from "localforage";
import AuthService from "../services/AuthService";
import {TokenService} from "../services/TokenService";

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
                TokenService.removeToken();
            }

            TokenService.setToken(token)
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

            AuthService.login(payload.email, payload.password).then((response) => {
                commit('setToken', response.data.meta.token);
            });
        },

    }
}