<template>

  <div class="centerDisplayFlexColumn">

    <div class="centerDisplayFlexRow">
      <router-link :to="{name: 'home-page'}">
        <div class="flexiflex-logo-HomePage">Flexiflex</div>
      </router-link>
      <div class="centerDisplayFlexRowRight">
        <router-link :to="{name: 'user-account'}">
          <button v-if= "user != null" class="useraccount-button" v-on:click="">Compte {{user.firstName}} {{user.lastName}}</button>
        </router-link>
        <button class="useraccount-button" v-on:click="doLogout">Logout</button>
      </div>

    </div>

    <div class="movies-component-background">

      <div class="loadingRingLoaderHeightCenter">
        <br><ring-loader :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
      </div>

    </div>





  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import RingLoader from 'vue-spinner/src/RingLoader.vue'

Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home-page',
  data() {
    return {
      email: "",
      colorRingLoader: '#2c3e50',
      sizeRingLoader: '200px'
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
    RingLoader
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
