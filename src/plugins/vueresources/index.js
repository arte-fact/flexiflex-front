import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

let urls = {
  production: 'http://62.210.148.177:9090',
  development: 'http://localhost:8080'
}

Vue.http.options.root = urls[process.env.NODE_ENV] + '/'
Vue.http.options.credentials = false
