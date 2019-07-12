import * as localforage from "localforage";

const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const TokenService = {

    getToken() {
        return localforage.getItem(TOKEN_KEY)
    },

    setToken(accessToken) {
        localforage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localforage.removeItem(TOKEN_KEY)
    },

    getRefreshToken() {
        return localforage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken(refreshToken) {
        localforage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },

    removeRefreshToken() {
        localforage.removeItem(REFRESH_TOKEN_KEY)
    }

};

export { TokenService };