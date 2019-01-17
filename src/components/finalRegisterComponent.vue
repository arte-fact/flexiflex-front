<template>
  <div class="centerDisplayFlexColumn">
    <div class="centerDisplayFlex">
      <div class="flexiflex-logo">Flexiflex</div>
      <div class="form-component">
        <div class="finalRegister-background-container"></div>
        <div class="center" v-if="user === null">
          <ring-loader :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
        </div>
        <div v-else>
          <form @submit.prevent="submit" action="https://" method="post">
            <h2 class="form-title">Profil</h2>
            <input class="form-input" v-bind:class="{invalidClass: prenom === ''}" id="prenom" v-model="prenom" type="text" name="prenom" placeholder="Prénom" maxlength="50">
            <input class="form-input" v-bind:class="{invalidClass: nom === ''}" id="nom" v-model="nom" type="text" name="nom" placeholder="Nom" maxlength="50">
            <button class="form-button" v-bind:class="{'form-button-disabled': prenom === '' || nom === ''}" type="submit" value="Submit">Valider</button>
            <h2 class="form-title-second">- - - - - </h2>
            <input class="form-input" id="email" type="text" v-model="user.email" placeholder="Email" disabled>
            <input class="form-input" id="birthdate" type="text" v-model="user.birthdate" placeholder="Date de naissance" disabled>
          </form>
        </div>
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
      }
    },
    components: {
      RingLoader
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
    }
  }
</script>

<style scoped>
  .finalRegister-background-container {
    position: absolute;
    height: 280px;
    width: 300px;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    z-index: -1;
  }
</style>
