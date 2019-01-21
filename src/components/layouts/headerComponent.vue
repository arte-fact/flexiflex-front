<template>
  <div class="header-container">
    <router-link to="/products">
      <div class="logo">Flexiflex</div>
    </router-link>
    <div class="buttonContainer">
      <router-link v-if= "user != null" class="button" to="auth/user-account">Compte {{user.firstName}} {{user.lastName}}</router-link>
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
    name: 'header-layout',
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
  .header-container{
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    z-index: 2;
    align-items: center;
    height: 70px;
    padding: 0 10px 0 10px;
    width: 100%;


    /*border: 5px solid #ff03d3;*/
  }
  .logo {
    position: relative;
    left: 0;
    font-family: "vegan", fantasy;
    font-size: 40px;
    text-shadow: 4px 4px 10px #cdcdcd;
    text-decoration: none;
    color: #2c3e50;
    cursor: pointer;
  }
  .logo:hover {
    text-decoration: none;
  }
  .buttonContainer{
    position: relative;
    right:0;
    top: 50%;
    transform: translate(0%,-50%);
  }
  .button{
    font-size: 12px;
    border: none;
    width: auto;
    height: 30px;
    color: #cdcdcd;
    background-color: #2c3e50;
    cursor: pointer;
    margin: 10px 0 10px 0;
  }
</style>
