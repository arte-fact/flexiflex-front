<template>
  <div class="login-component">
    <span v-if="isRegistering">Chargement...</span>
    <div v-else>
      <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
        <div class="login-component-background"></div>
        <h2 class="form-title">Inscription</h2>
        <input class="form-input" id="name" v-model="email" type="text" name="email" placeholder="Email">
        <input class="form-input" id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
        <div class="form-button" v-if="!isRegistering" v-on:click="submit">Envoyer</div>
      </form>
    </div>
    <p v-if="isRegistered">
      Un email de validation à été envoyé à l'adresse {{email}}.
      Merci de l'ouvrir et de cliquer sur le lien ;)
    </p>
    <p v-if="hasRegistrationError">
      Ooops... Il y a eu un probleme lors de votre inscription... :(
    </p>


    <p class="mt-5 mb-3 text-muted">Vous avez un compte?</p>
    <router-link class="menu-item" to='/login'>
      Connectez-vous
    </router-link>
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
      'hasRegistrationError',
      'isRegistered',
      'isRegistering',
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
      'register',
      'request',
      'resetErrors'
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
