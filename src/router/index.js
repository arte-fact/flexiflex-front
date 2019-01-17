import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '../components/loginComponent'
import registerComponent from '../components/registerComponent'
import homeLayout from '../components/layouts/homeLayout'
import finalRegisterComponent from '../components/finalRegisterComponent'
import userAccountComponent from '../components/userAccountComponent'
import connectionLayout from '../components/layouts/connectionLayout'
import homeComponent from "../components/homeComponent";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      name: 'connection-layout',
      component: connectionLayout,
      children: [
        {
          path: 'login',
          name: 'login-page',
          component: loginComponent
        },
        {
          path: 'register',
          name: 'register-page',
          component: registerComponent
        },
        {
          path: '/final-register',
          name: 'final-register-page',
          component: finalRegisterComponent
        },
      ]
    },
    {
      path: '/home',
      name: 'home-layout',
      component: homeLayout,
      children: [
        {
          path: '/product-list',
          name: 'product-list',
          component: homeComponent
        },
        {
          path: '/user-account',
          name: 'user-account',
          component: userAccountComponent
        },
      ]
    },
    {
      path: '/*',
      component: homeComponent
    }
  ]
})
