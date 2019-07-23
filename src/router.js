import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Profile from "./views/ProfileAuthUser";
import ProfileById from "./views/ProfileById";
import Search from "./views/Search";
import Conversations from "./views/Conversations";
import store from './store'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Please SignIn',
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: 'Registration',
        requiresAuth: false
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        title: 'My profile',
        requiresAuth: true
      }
    },
    {
      path: '/profile/:id',
      name: 'profileById',
      component: ProfileById,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        title: 'Search',
        requiresAuth: true
      }
    },
    {
      path: '/conversations',
      name: 'conversations',
      component: Conversations,
      meta: {
        title: 'Conversations',
        requiresAuth: true
      }
    },
  ]
});

const DEFAULT_TITLE = ' :: ' + process.env.VUE_APP_NAME;

router.beforeEach((to, from, next) => {

  if(to.meta.title) {
    document.title = to.meta.title + DEFAULT_TITLE;
  }

  store.dispatch('auth/checkStorageTokenExist').then(() => {
    next();
  }).catch(() => {

    if(to.meta.requiresAuth){
      next({name: 'login'});
      return;
    }

    next();

  });

});

export default router;
