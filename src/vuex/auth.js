
import {SecurityService} from "../services/SecurityService";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";

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
                SecurityService.removeToken();
            }

            SecurityService.setToken(token)
        },

        setAuthenticated(state, bool) {
            state.user.isAuthenticated = bool;
        },

        setUserData(state, user) {
            state.user.data = user;
        }

    },

    actions: {

        login({ commit, dispatch }, {payload, context}) {
            return AuthService.login(payload.email, payload.password).then((response) => {

                dispatch('setToken', response.data.meta.token);

                commit('setAuthenticated', true);
                commit('setUserData', response.data.data);

            }).catch((error) => {
                context.errors = error.response.data.errors;
                throw error
            });
        },

        register({ commit, dispatch }, {payload, context}) {

            return AuthService.register(
                    payload.email,
                    payload.name,
                    payload.password,
                    payload.country,
                    payload.city,
                    payload.birthday,
                    payload.sex
            ).then((response) => {

                dispatch('setToken', response.data.meta.token);

                commit('setAuthenticated', true);
                commit('setUserData', response.data.data);

            }).catch((error) => {
                context.errors = error.response.data.errors;
                throw  error;
            });
        },

        logout({ dispatch }) {
            return AuthService.logout().then(() => {
                dispatch('clearAuth');
            });
        },

        setToken({ commit, dispatch }, token) {

            if(!token){
                return dispatch('checkStorageTokenExist');
            }

            commit('setToken', token);
        },

        checkStorageTokenExist() {

            return SecurityService.getToken().then((token) => {

                if(!token){
                    return Promise.reject('NO TOKEN');
                }

                return Promise.resolve(token);
            });
        },

        clearAuth({commit}) {
            commit('setToken', null);
            commit('setAuthenticated', false);
            commit('setUserData', null);
        },

        fetchCurrentUser({ commit }) {

            return UserService.getProfile().then((response) => {
                commit('setAuthenticated', true);
                commit('setUserData', response.data.data);
            });

        },
    }
}