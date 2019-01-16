<template>
  <div class="centerDisplayFlexColumn">
    <!--<div>-->
    <headerLayout></headerLayout>
    <div class="movies-component-background">
      <!--<div class="loadingRingLoaderHeightCenter">-->
        <!--<br><ring-loader :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import headerLayout from './layouts/headerComponent.vue'
import { mapActions, mapGetters } from 'vuex'
Vue.use(Vuex);
export default {
  name: 'home-page',
  data() {
    return {
      email: "",
      products: null,
      colorRingLoader: '#2c3e50',
      sizeRingLoader: '200px',
    }
  },
  computed: {
    ...mapGetters('auth', [
      'token',
      'user',
      'userRequestFail'
    ])
  },
  components: {
    RingLoader,
    headerLayout
  },
  created () {
    if (this.user === null) {
      this.request()
      setTimeout(this.getProducts(), 1500)
    }
  },
  methods: {
    ...mapActions('auth', [
      'requestUser',
      'resetUser',
      'resetToken',
      'setAuthHeaderFromCookie',
      'logout'
    ]),
    request () {
      this.requestUser()
    },
    doLogout() {
      this.resetToken()
      this.resetUser()
    },
  }
}
</script>

<style scoped>
  .movies-component-background{
    min-height: 0%;
    height: 100%;
    max-height: 100%;
    width: 96.5vw;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    z-index: -1;
  }

</style>
