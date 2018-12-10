import Vue from 'vue'
import store from '../../store'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(store)

let urls = {
  production: 'https://flexiflex.ddns.net:9090',
  development: 'http://localhost:8080'
}

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.options.root = urls[process.env.NODE_ENV] + '/'
Vue.http.options.credentials = true
