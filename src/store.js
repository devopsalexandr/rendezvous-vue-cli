import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./vuex/auth";
import profile from "./vuex/profile";
import search from "./vuex/search";
import conversations from "./vuex/conversations";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    profile,
    search,
    conversations
  }
})
