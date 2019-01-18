import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '../components/loginComponent'
import registerComponent from '../components/registerComponent'
import homeLayout from '../components/layouts/homeLayout'
import finalRegisterComponent from '../components/finalRegisterComponent'
import userAccountComponent from '../components/userAccountComponent'
import connectionLayout from '../components/layouts/connectionLayout'
import productsComponent from "../components/productsComponent";
import productDetailComponent from "../components/productDetailComponent";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-layout',
      component: homeLayout,
      children: [
        {
          path: '/products',
          name: 'products',
          component: productsComponent
        },
      ]
    },
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
          path: 'final-register',
          name: 'final-register-page',
          component: finalRegisterComponent
        },
        {
          path: 'user-account',
          name: 'user-account',
          component: userAccountComponent
        },
      ]
    },
    {
      path: '/*',
      component: homeLayout,
      name: 'default'
    }
  ]
})
