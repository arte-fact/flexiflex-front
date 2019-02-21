import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

let urls = {
  production: 'https://api.flexiflex.tk',
  development: 'http://localhost:8080'
}

Vue.http.options.root = urls[process.env.NODE_ENV] + '/'
// Vue.http.options.credentials = false
