<template>

  <div class="centerDisplayFlexColumn">

    <div class="centerDisplayFlexRow">
      <router-link :to="{name: 'home-page'}">
        <div class="flexiflex-logo-HomePage">Flexiflex</div>
      </router-link>
      <div class="centerDisplayFlexRowRight">
        <router-link :to="{name: 'user-account'}">
          <button v-if= "user != null" class="useraccount-button" v-on:click="">Compte {{user.firstName}} {{user.lastName}}</button>
        </router-link>
        <button class="useraccount-button" v-on:click="doLogout">Logout</button>
      </div>

    </div>

    <div class="form-component">
      <div class="finalRegister-component-background"></div>
      <div class="center" v-if="user === null">
        <ring-loader :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
      </div>
      <div v-else>
        <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
          <h2 class="form-title">Profil</h2>
          <input class="form-input" v-bind:class="{invalidClass: prenom === ''}" id="prenom" v-model="prenom" type="text" name="prenom" placeholder="Prénom" maxlength="50">
          <input class="form-input" v-bind:class="{invalidClass: nom === ''}" id="nom" v-model="nom" type="text" name="nom" placeholder="Nom" maxlength="50">
          <input class="form-input" id="email" type="text" v-model="user.email" placeholder="Email" disabled>
          <input class="form-input" id="birthdate" type="text" v-model="user.birthdate" placeholder="Date de naissance" disabled>
          <button class="form-button" v-bind:class="{'form-button-disabled': prenom === '' || nom === ''}" type="submit" value="Submit">Valider</button>
        </form>
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
    name: 'user-account',
    data() {
      return {
        email: "",
        colorRingLoader: '#2c3e50',
        sizeRingLoader: '200px'
      }
    },
    computed: {
      ...mapGetters('auth', [
        'token',
        'user',
        'userRequestFail'
      ])
    },
    components: {
      RingLoader
    },
    created () {
      if (this.user === null) {
        this.request()
      }


    },
    methods: {
      ...mapActions('auth', [
        'requestUser',
        'resetUser',
        'resetToken',
        'setAuthHeaderFromCookie',
        'logout'
      ]),
      request () {
        this.requestUser()
      },
      doLogout() {
        this.resetToken()
        this.resetUser()
      }
    }
  }
</script>
