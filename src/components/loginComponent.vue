<template>
    <div class="centerDisplayFlex">
        <form class="form-component" @submit.prevent="submit" action="https://" method="post">
          <h2 class="form-title">Connexion</h2>
          <input class="form-input" v-bind:class="{invalidClass: emailRegexValid === false && email != ''}" id="name" v-model="email" type="text" name="email" placeholder="Email">
          <input class="form-input" v-bind:class="{invalidClass: password.length < 3 && password != ''}" id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
          <button class="form-button" v-bind:class="{'form-button-disabled': email === '' || password === '' || emailRegexValid === false || password.length < 3}"  v-if="!isAuthenticating">Connexion</button>
        </form>
        <div class="placeMessageSousBoutton" v-if="!isAuthenticating">
          <div class="sizeHomepageLinks">Vous êtes nouveau ?
            <router-link class="menu-item" to='/auth/register'>
              Inscrivez-vous
            </router-link>
          </div>
          <div v-if="emailRegexValid === false && email != ''">Format d'email incorrect</div>
          <div v-if="password.length < 3 && password != ''">Mot de passe : 3 caractères minimum </div>
          <div v-if="hasAuthenticationError">Email ou mot de passe invalides</div>
        </div>
        <!--Image de chargement quand clique sur le bouton-->
        <div class="placeMessageSousBoutton loadingRingLoader" v-if="isAuthenticating" v-on:click="submit">
          <br><ring-loader :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import RingLoader from 'vue-spinner/src/RingLoader.vue'
  export default {
    name: 'login-page',
    data () {
      return {
        msg: 'Login',
        email: '',
        password: '',
        error: this.hasError,
        emailRegexValid: true,
        colorRingLoader: '#2c3e50',
        sizeRingLoader: '40px',
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
    components: {
      RingLoader
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
