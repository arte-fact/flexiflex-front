<template>
  <div class="container">
    <router-link :to="{name: 'home-page'}">
      <div class="logo">Flexiflex</div>
    </router-link>
    <div class="buttonContainer">
      <router-link :to="{name: 'user-account'}">
        <button v-if= "user != null" class="button">Compte {{user.firstName}} {{user.lastName}}</button>
      </router-link>
      <button class="button" v-on:click="doLogout">Logout</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex);
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'headerLayout',
    computed: {
      ...mapGetters('auth', [
        'user',
      ])
    },
    watch:{
      user (newValue){
        this.firstName = newValue.firstName
        this.lastName = newValue.lastName
      }
    },
    methods: {
      ...mapActions('auth', [
        'resetUser',
        'resetToken',
      ]),
      doLogout() {
        this.resetToken()
        this.resetUser()
      }
    }
  }
</script>

<style scoped>
  .container{
    position: relative;
    height:65px;
    min-height: 65px;
    width:100%;
    min-width:100%;
    margin-bottom: 0.5vh;
  }
  .logo {
    position: absolute;
    left: 0px;
    font-family: "vegan", fantasy;
    font-size: 40px;
    text-shadow: 4px 4px 10px #cdcdcd;
    text-decoration: none;
    color: #2c3e50;
    cursor: pointer;
  }
  .logo:hover {
    font-family: "vegan", fantasy;
    font-size: 40px;
    text-shadow: 4px 4px 10px #cdcdcd;
    text-decoration: none;
  }
  .buttonContainer{
    position: absolute;
    right:0px;
    top: 50%;
    transform: translate(0%,-50%);
  }
  .button{
    font-size: 12px;
    border: none;
    border-radius: 5px;
    width: auto;
    height: auto;
    color: #cdcdcd;
    background-color: #2c3e50;
    cursor: pointer;
  }
</style>
