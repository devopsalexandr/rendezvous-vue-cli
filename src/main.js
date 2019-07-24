import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import HttpApiClient from "./services/HttpApiClient";
import interceptorSetup from "./helpers/HttpInterceptor";
import localforage from "localforage";
import Echo from "laravel-echo"
import Toasted from 'vue-toasted';

Vue.config.productionTip = false;

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: 'socialite'
});

HttpApiClient.init(process.env.VUE_APP_API_URI);

interceptorSetup();

store.dispatch('auth/setToken').then(() => {

  store.dispatch('auth/fetchCurrentUser').catch(() => {
    store.dispatch('auth/clearAuth');
    router.replace({name: 'login'});
  });

}).catch(() => {
  store.dispatch('auth/clearAuth');
});


window.io = require('socket.io-client');

window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: window.location.hostname + ':6001',

});

Vue.use(BootstrapVue);
Vue.use(Toasted);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
