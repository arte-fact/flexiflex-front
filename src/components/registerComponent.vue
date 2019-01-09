<template>
  <div class="login-component">
    <span v-if="isRegistering">
      <div>
    Chargement...
      </div>
    </span>
    <div v-else>
      <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
        <div class="login-component-background"></div>
        <h2 class="form-title">Inscription</h2>
        <input class="form-input" id="name" v-model="email" type="text" name="email" placeholder="Email">
        <input class="form-input" id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
        <input class="form-input form-input-date" v-bind:class="{birthdateClass: birthdate === null}" id="birthdate" v-model="birthdate" type="date" name="birthdate">
        <button class="form-button form-button-register" v-if="!isRegistering" v-on:click="submit">Inscription</button>
      </form>
    </div>

    <p class="mt-5 mb-3 text-muted">Vous avez un compte...</p>
    <router-link class="menu-item" to='/login'>
      Connectez-vous
    </router-link>

    <p class="ok" v-if="isRegistered">
      Un email de validation à été envoyé à {{email}}.
    </p>
    <p class="error-register" v-if="hasRegistrationError">
      Email, mot de passe ou date de naissance incorrect
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
      password: "",
      birthdate: null
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
    },

    birthdate(newvalue){

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
        birthdate: this.birthdate,
      })
    }
  }
}
</script>
