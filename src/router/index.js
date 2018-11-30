import Vue from 'vue'
import Router from 'vue-router'
import splashComponent from '@/components/splashComponent'
import loginComponent from '@/components/loginComponent'
import registerComponent from '@/components/registerComponent'
import catalogComponent from '@/components/catalogComponent'
import finalRegisterComponent from '@/components/finalRegisterComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bienvenue',
      component: splashComponent
    },
    {
      path: '/login',
      name: 'login page',
      component: loginComponent
    },
    {
      path: '/register',
      name: 'register page',
      component: registerComponent
    },
    {
      path: '/catalog',
      name: 'catalog page',
      component: catalogComponent
    },
    {
       path: '/finalregister',
       name: 'finalRegister page',
       component: finalRegisterComponent
      }
/*      {
                path: '*//*',
                name: 'default',
                component: splashComponent
               }*/


  ]
})
