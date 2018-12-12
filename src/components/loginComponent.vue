<template>
  <div class="login-component">
    <div v-if="hasAuthenticationError">Email ou password incorrect</div>
    <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
        <input id="name" v-model="email" type="text" name="email" placeholder="Email">
        <input id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
    </form>
    <button v-if="!isAuthenticating" v-on:click="submit">Login</button>
    <span v-if="isAuthenticating" v-on:click="submit">Chargement</span>
    <p class="mt-5 mb-3 text-muted">Vous nouveau sur Flexiflex?
      <router-link class="menu-item" to='/register'>
        Inscrivez-vous
      </router-link>
    </p>
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
        'resetErrors'
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
