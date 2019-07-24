import localforage from "localforage";
import HttpApiClient from "./services/HttpApiClient";
import interceptorSetup from "./helpers/HttpInterceptor";
import Echo from "laravel-echo";

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: 'socialite'
});

HttpApiClient.init(process.env.VUE_APP_API_URI);

interceptorSetup();


window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',

});