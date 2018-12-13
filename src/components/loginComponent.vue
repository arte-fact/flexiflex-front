<template>
  <div class="login-component">
    <div class="login-component-background"></div>
    <div v-if="hasAuthenticationError">Email ou password incorrect</div>
    <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
      <h2 class="form-title">Connection</h2>
        <input class="form-input" id="name" v-model="email" type="text" name="email" placeholder="Email">
        <input class="form-input" id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
        <div class="form-button" v-if="!isAuthenticating" v-on:click="submit">Envoyer</div>
    </form>
    <span v-if="isAuthenticating" v-on:click="submit">Chargement</span>
    <p class="mt-5 mb-3 text-muted">Vous nouveau sur Flexiflex?</p>
    <router-link class="menu-item" to='/register'>
        Inscrivez-vous
      </router-link>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'login-page',
    data () {
      return {
        msg: 'Login',
        email: '',
        password: '',
        error: this.hasError
      }
    },
    computed: {
      ...mapGetters('auth', [
        'hasAuthenticationError',
        'username',
        'isAuthenticated',
        'isAuthenticating',
        'token'
      ])
    },
    created () {
      this.resetErrors()
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
      }
    },
    methods: {
      ...mapActions('auth', [
        'login',
        'resetErrors',
        'setAuthHeader'
      ]),
      submit () {
        this.login({
          username: this.email,
          password: this.password
        })
      },
    }
  }
</script>
