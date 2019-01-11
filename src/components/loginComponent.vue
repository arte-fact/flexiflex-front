<template>
  <div class="login-component">
    <div class="login-component-background"></div>
    <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
      <h2 class="form-title">Connexion</h2>
      <input class="form-input" v-bind:class="{invalidClass: emailRegexValid === false && email != ''}" id="name" v-model="email" type="text" name="email" placeholder="Email">
      <input class="form-input" v-bind:class="{invalidClass: password.length < 3 && password != ''}" id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
      <button class="form-button" v-bind:class="{'form-button-disabled': email === '' || password === '' || emailRegexValid === false || password.length < 3}"  v-if="!isAuthenticating" v-on:click="submit">Connexion</button>
    </form>

    <div class="errorSaisieLogin">
      <div class="sizeHomepageLinks">Vous êtes nouveau ?
        <router-link class="menu-item" to='/register'>
          Inscrivez-vous
        </router-link>
      </div>
      <div v-if="emailRegexValid === false && email != ''">Format d'email incorrect</div>
      <div v-if="password.length < 3 && password != ''">Mot de passe : 3 caractères minimum </div>
      <div v-if="hasAuthenticationError">Email ou mot de passe invalides</div>

      <!--Message de Changerment quand Click bouton-->

      <div class="ok" v-if="isAuthenticating" v-on:click="submit">Chargement...</div>
    </div>
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
        error: this.hasError,
        emailRegexValid: true,
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
      },

      email(email) {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.emailRegexValid = regex.test(email);
        this.resetErrors()
      },

      password(){
        this.resetErrors()
      },

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
