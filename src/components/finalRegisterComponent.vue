<template>
  <div>
    <div v-if="!hasError && !isActivated">Activation de votre compte...</div>
    <div v-if="hasError">Erreur d'activation: {{errorMessage}}</div>
    <div v-if="isActivated">Votre compte est maintenant actif...<router-link to="/auth/login">Login!</router-link></div>
    <div class="form-component">
      <div class="center" v-if="!hasError && !isActivated">
        <ring-loader :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import RingLoader from 'vue-spinner/src/RingLoader.vue'

  Vue.use(Vuex);
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'final-register-page',
    data () {
      return {
        prenom: '',
        nom: '',
        email:'',
        birthdate:'',
        colorRingLoader: '#2c3e50',
        sizeRingLoader: '120px',
        isActivated: false,
        hasError: false,
        errorMessage: ''
      }
    },
    components: {
      RingLoader
    },
    created (){
      this.activate()
    },
    computed:{
      ...mapGetters('auth',[
        'user'
      ])
    },
    methods: {
      ...mapActions('auth', [
        'updateUser'
      ]),
      submit () {
        this.updateUser({
          login: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
        })
      },
      activate () {
        console.log(this.$route.params.activationKey)
        Vue.http.get(
          'api/activate?key=' + this.$route.params.activationKey,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json'
            }
          }
        ).then(
          response => {
            if (response.status === 200) {
              this.isActivated = true
            } else {
              this.hasError = true
              this.errorMessage = response.body.title
            }
          },
          response => {
            this.hasError = true
            this.errorMessage = response.body.title
          }
        )
      }
    }
  }
</script>

<style scoped>
  .center{
    text-align: center;
    align-items: center;
    padding : 85px 90px;
  }
</style>
