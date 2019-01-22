<template>
  <div class="home-container">
      <header-layout></header-layout>

    <div class="body-content">
      <search-bar v-bind:isAdmin="admin"></search-bar>
      <product-detail-component></product-detail-component>
      <products></products>
      <video-player-modal></video-player-modal>
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
  import SearchBar from "../searchBarComponent";

  Vue.use(Vuex);
  export default {
    name: 'home-layout',
    data() {
      return {
        admin: false,
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
      SearchBar,
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

      if (this.token === null) {
        this.$router.push({
          name: 'login-page'
        })
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
      },
      inArray(needle, haystack) {
        let length = haystack.length;
        for(let i = 0; i < length; i++) {
          if(haystack[i] === needle) return true;
        }
        return false;
      }
    },
    watch: {
      user(newValue) {
        if (this.inArray("ROLE_ADMIN", newValue.authorities)) {
          this.isAdmin = true
        } else {
          this.isAdmin = false
        }
      },

    }
  }
</script>

<style scoped>
  .home-container {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;


    /*border: 5px solid #ffef00;*/
  }

  .body-content {
    background-color: #cccc;
    position: absolute;
    flex-direction: column;
    display: flex;
    padding: 70px 10px 25px 10px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    /*border: 5px solid #1eff0a;*/

  }
</style>

