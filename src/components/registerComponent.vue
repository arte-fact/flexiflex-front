<template>
  <div>
    <form class="form-component" @submit.prevent="submit" action="https://" method="post">
      <h2 class="form-title">Inscription</h2>
      <input class="form-input" v-bind:class="{invalidClass: emailRegexValid === false && email != ''}" id="email" v-model="email" type="text" name="email" placeholder="Email">
      <input class="form-input" v-bind:class="{invalidClass: password.length < 3 && password != ''}" id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
      <input class="form-input form-input-date" v-bind:class="{birthdateClass: birthdate === null || birthdate === '', invalidClass: agevalidate === false && birthdate != ''}" id="birthdate" v-model="birthdate" type="date" name="birthdate">
      <button class="form-button form-button-register" v-bind:class="{'form-button-disabled': email === '' || password === '' || birthdate === null || emailRegexValid === false || password.length < 3 || agevalidate === false}" v-if="!isRegistering">Inscription</button>
    </form>
    <div class="placeMessageSousBoutton" v-if="!isRegistering">
      <div class="sizeHomepageLinks">Vous avez un compte...
        <router-link class="menu-item" to='/auth/login'>
          Connectez-vous
        </router-link>
      </div>
      <div v-if="emailRegexValid === false && email != ''">Format d'email incorrect</div>
      <div v-if="password.length < 3 && password != ''">Mot de passe : 3 caractères minimum </div>
      <div v-if="agevalidate === false && birthdate != ''">Vous devez avoir 16 ans</div>
      <div v-if="hasRegistrationError">Erreur inscription</div>
      <!--Message d'envoi d'email quand l'inscription réussi-->
      <div class="ok" v-if="isRegistered">
        Un email vous a été envoyé à l'adresse :
        <br> {{email}}
      </div>
    </div>
    <div class="placeMessageSousBoutton loadingRingLoader" v-if="isRegistering" v-on:click="submit">
      <br><ring-loader :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import footerLayout from './layouts/footerComponent.vue'

Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'
import RingLoader from 'vue-spinner/src/RingLoader.vue'

  export default {
    name: 'register-page',
    data() {
      return {
        email: "",
        password: "",
        birthdate: null,
        emailRegexValid: true,
        agevalidate: true,
        colorRingLoader: '#2c3e50',
        sizeRingLoader: '40px',
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
    components: {
      RingLoader,
      footerLayout
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
        this.resetErrors()
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
        'register',
        'request',
        'resetErrors'
      ]),
      submit () {
        this.register({
          email: this.email,
          password: this.password,
          birthdate: this.birthdate,
        })
      }
    }
  }
</script>

<style scoped>
  .register-background-container {
    position: absolute;
    height: 280px;
    width: 300px;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    z-index: -1;
  }
</style>
