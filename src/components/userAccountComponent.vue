<template>
  <div class="centerDisplayFlexColumn">
    <headerLayout></headerLayout>
    <div class="centerDisplayFlex">
        <div class="userAccount-background-container">
          <div class="center" v-if="user === null">
            <ring-loader :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
          </div>
          <div v-else>
            <form @submit.prevent="submit" action="https://" method="post">
              <h2 class="form-title">Modifier votre profil</h2>
              <br>
              <input class="form-input" v-bind:class="{invalidClass: user.firstName === ''}" id="prenom" v-model="user.firstName" type="text" name="prenom" placeholder="Prénom" maxlength="50">
              <input class="form-input" id="email" type="text" v-model="user.email" placeholder="Email" disabled>
              <input class="form-input" v-bind:class="{invalidClass: user.lastName === ''}" id="nom" v-model="user.lastName" type="text" name="nom" placeholder="Nom" maxlength="50">
              <input class="form-input" id="birthdate" type="text" v-model="user.birthdate" placeholder="Date de naissance" disabled>
            </form>
            <button class="form-button" v-bind:class="{'form-button-disabled': user.firstName === '' || user.lastName === ''}" v-on:click="submit">Modifier Compte</button>
            <button class="form-button-delete" v-on:click="deleteUserNow">Supprimer Compte</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import RingLoader from 'vue-spinner/src/RingLoader.vue'
  import headerLayout from './layouts/headerComponent.vue'


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
      RingLoader,
      headerLayout
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
        'logout',
        'deleteUser',
        'updateUser'
      ]),
      request () {
        this.requestUser()
      },
      submit () {
        this.updateUser({
          login: this.user.email,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
        })
      },
      deleteUserNow(){
        this.deleteUser(
          this.user.email
        )
      },
      doLogout() {
        this.resetToken()
        this.resetUser()
      }
    }
  }
</script>

<style scoped>
  .userAccount-background-container{
    height: 220px;
    width: 480px;
    margin: 5px;
    padding-top: 10px;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    z-index: -1;
  }
</style>
