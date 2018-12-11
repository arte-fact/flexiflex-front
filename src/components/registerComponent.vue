<template>
  <div class="login-component">
    <div v-if="hasError">Email ou password incorrect</div>
    <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
        <input id="name" v-model="email" type="text" name="email" placeholder="Email">
        <input id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
    </form>
    <button v-on:click="submit">Inscription</button>

    <p class="mt-5 mb-3 text-muted">Vous avez un compte?
      <router-link class="menu-item" to='/login'>
      Connectez-vous
    </router-link>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'register-page',
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    ...mapGetters('auth', [
      'hasError',
      'isAuthenticated',
      'isRegistered',
      'token'
    ])
  },
  created () {
    if (this.token !== null) {
      this.$router.push({
        name: 'home-page'
      })
    }
  },
  watch: {
    token (newValue) {
      if (newValue !== null) {
        this.$router.push({
          name: 'home-page'
        })
      }
    },
    isRegistered (newValue) {
      if (newValue != null) {
        console.log('regisered')
        this.login({
          username: this.email,
          password: this.password
        })
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'login',
      'register',
      'request'
    ]),
    submit () {
      console.log("submit")
      this.register({
        email: this.email,
        password: this.password,
      })
    }
  }
}
</script>
