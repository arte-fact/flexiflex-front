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
        <input class="form-input" v-bind:class="{invalidClass: emailRegexValid === false && email != ''}" id="name" v-model="email" type="text" name="email" placeholder="Email">
        <input class="form-input" v-bind:class="{invalidClass: password.length < 3 && password != ''}" id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
        <input class="form-input form-input-date" v-bind:class="{birthdateClass: birthdate === null || birthdate === '', invalidClass: agevalidate === false && birthdate != ''}" id="birthdate" v-model="birthdate" type="date" name="birthdate">
        <button class="form-button form-button-register" v-bind:class="{'form-button-disabled': email === '' || password === '' || birthdate === null || emailRegexValid === false || password.length < 3 || agevalidate === false}" v-if="!isRegistering" v-on:click="submit">Inscription</button>
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
      birthdate: null,
      emailRegexValid: true,
      agevalidate: true,
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
      // Validité de la date de naissance : Personnes de plus de 16 ans
        let dateActuelleInMilliseconds = Date.now();

        let userBirthdayYears = new Date(newvalue).getFullYear();
        const sixteenYears = 16;

        let userBirthdayYearsPlusSixteenYears = new Date(newvalue);
        userBirthdayYearsPlusSixteenYears.setUTCFullYear(userBirthdayYears + sixteenYears);

        let userBirthdayYearsInMilliseconds = Date.parse(userBirthdayYearsPlusSixteenYears);

        if(userBirthdayYearsInMilliseconds <= dateActuelleInMilliseconds){
          this.agevalidate = true
        }else{
          this.agevalidate = false
        }
    },

    email(email) {
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.emailRegexValid = regex.test(email);
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
