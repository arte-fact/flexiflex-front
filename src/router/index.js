import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '@/components/loginComponent'
import registerComponent from '@/components/registerComponent'
import catalogComponent from '@/components/homeComponent'
import finalRegisterComponent from '@/components/finalRegisterComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: loginComponent
    },
    {
      path: '/register',
      name: 'register-page',
      component: registerComponent
    },
    {
      path: '/home',
      name: 'home-page',
      component: catalogComponent
    },
    {
       path: '/finalregister',
       name: 'finalRegister page',
       component: finalRegisterComponent
    },
    {
      path: '/*',
      component: loginComponent
    }
  ]
})
