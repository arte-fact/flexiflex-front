<template>
  <div class="centerDisplayFlexColumn">
    <div class="centerDisplayFlexRow">
      <router-link :to="{name: 'home-page'}">
        <div class="flexiflex-logo-HomePage">Flexiflex</div>
      </router-link>
      <div class="centerDisplayFlexRowRight">
        <router-link :to="{name: 'user-account'}">
          <button v-if= "user != null" class="useraccount-button">Compte {{user.firstName}} {{user.lastName}}</button>
        </router-link>
        <div class="useraccount-button" v-on:click="doLogout">Logout</div>
      </div>
    </div>
    <product-list></product-list>
    <product-detail></product-detail>
    <video-player-modal></video-player-modal>
    <headerLayout></headerLayout>
    <div class="movies-background-container">
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
import ProductList from './productListComponent.vue'
import ProductDetail from './productDetailComponent.vue'
import VideoPlayerModal from './videoPlayerModal.vue'
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
    ProductList,
    ProductDetail,
    VideoPlayerModal,
    headerLayout
  },
  created () {
    if (this.user === null) {
      this.request()
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
    }
  }
}
</script>

<style scoped>
  .movies-background-container{
    min-height: 0%;
    height: 100%;
    max-height: 100%;
    width: 96.5vw;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    z-index: -1;
    margin-bottom: 0.3vh;
  }
</style>
