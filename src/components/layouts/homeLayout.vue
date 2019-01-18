<template>
  <div class="home-container">
    <header-layout></header-layout>
    <div class="body-content">
      <products></products>
      <product-detail-component></product-detail-component>
      <!--<video-player-modal></video-player-modal>-->
    </div>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import RingLoader from 'vue-spinner/src/RingLoader.vue'
  import Products from '../productsComponent.vue'
  import ProductDetailComponent from '../productDetailComponent.vue'
  import VideoPlayerModal from '../videoPlayerModal.vue'
  import headerLayout from '../layouts/headerComponent.vue'
  import footerLayout from '../layouts/footerComponent.vue'
  import { mapActions, mapGetters } from 'vuex'
  import FooterLayout from "./footerComponent.vue";

  Vue.use(Vuex);
  export default {
    name: 'home-layout',
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
      FooterLayout,
      RingLoader,
      Products,
      ProductDetailComponent,
      VideoPlayerModal,
      headerLayout,
      footerLayout
    },
    created () {
      if (this.user === null) {
        this.request()
      }

      this.$router.push('products')
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
  .home-container {
    display: flex;
    justify-content: center;
  }
  .body-content {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #cccc;
    transition: all ease 1s;
    top: 0;
    bottom: 0;
    padding: 90px 20px 20px 20px;
  }

</style>

