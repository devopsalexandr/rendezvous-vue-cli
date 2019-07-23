import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Profile from "./views/ProfileAuthUser";
import ProfileById from "./views/ProfileById";
import Search from "./views/Search";
import Conversations from "./views/Conversations";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/profile/:id',
      name: 'profileById',
      component: ProfileById,
      props: true,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/conversations',
      name: 'conversations',
      component: Conversations,
    },
  ]
})
