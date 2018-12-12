<template>
  <div class="home-component">
    <div v-if="user == null">Chargement...</div>
    <h1 v-else>Bienvenue chez vous, {{user.email}}!</h1>
    <button v-on:click="doLogout">Logout</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home-page',
  data() {
    return {
      email: ""
    }
  },
  computed: {
    ...mapGetters('auth', [
      'token',
      'uuid',
      'user',
      'userRequestFail'
    ])
  },
  created () {
    if (this.token === null) {
      this.$router.push({
        name: 'login-page'
      })
    }

    if (this.user === null) {
      this.request()
    }
  },
  watch: {
    token (newValue) {
      if (newValue === null) {
        this.$router.push({
          name: 'login-page'
        })
      }
    },

    userRequestFail(state) {
      if (state === true) {
        this.resetToken()
        this.resetUser()
      }
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
      console.log("request user")

      this.setAuthHeaderFromCookie()

      this.requestUser()
    },
    doLogout() {
      this.resetToken()
      this.resetUser()
    }
  }
}
</script>
