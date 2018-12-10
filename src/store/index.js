import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { auth } from './modules'

Vue.use(Vuex)

export default new Store({
  modules: { auth }
})
