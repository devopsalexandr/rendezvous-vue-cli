import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Toasted from 'vue-toasted';
import Handler from "./errorHandlers/Handler";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Toasted);
Vue.config.errorHandler = Handler;

require('./bootstrap');

store.dispatch('auth/setToken').then(() => {

  store.dispatch('auth/fetchCurrentUser').catch(() => {
    store.dispatch('auth/clearAuth');
    router.replace({name: 'login'});
  });

}).catch(() => {
  store.dispatch('auth/clearAuth');
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
