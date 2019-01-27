<template>
  <div id="app" class="app">
    <div v-bind:style="styleObject"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import GlobalLayout from './components/layouts/connectionLayout.vue'

  export default {
    name: 'App',
    data() {
      return {
        backgroundRandom: "../src/assets/homepage/background-splash-1.jpg",
        num: null,

        windowWidth: 0,
        txt: '',
        imageNumber:1,

        styleObject: {
          position: 'fixed',
          content: '',
          backgroundImage : null,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'black',
          opacity: 0.8,
          zIndex: -2,
          width: '100vw',
          height: '100vh',
        }
      }
    },
    created() {
      this.setTokenFromCookie()

      this.imageNumber = Math.ceil( Math.random() * 4 )
      if (window.innerWidth <= 812) {
        this.styleObject.backgroundImage = 'url(' + require('@/assets/homepage_MaxWidth_600/background-splash-medium-' + this.imageNumber + '.jpg')
      } else {
        this.styleObject.backgroundImage = 'url(' + require('@/assets/homepage/background-splash-' + this.imageNumber + '.jpg')
      }
    },
    watch: {
      token (newValue) {
        if (newValue === null) {
          this.$router.push({
            name: 'login-page'
          })
        } else {
          this.$router.push({
            name: 'products'
          })
        }
      },

      userRequestFail(state) {
        if (state === true) {
          this.resetToken()
          this.resetUser()
        }
      }
    },
    methods: {
      ...mapActions('auth', [
        'setAuthHeader',
        'setAuthHeaderFromCookie',
        'setTokenFromCookie'
      ]),
    },
    computed: {
      ...mapGetters('auth', [
        'token',
        'user'
      ])
    },
    components: {
      GlobalLayout
    },
  }
</script>

<style>
html {
  position: relative;
  color: #1d1d1d;
  background: #cccc;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
body {
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
}

form {
  margin: 0;
  padding: 0;
}
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  height: 100%;
}

  @font-face {
    font-family: "vegan";
    src: url('./assets/vegan.ttf') format("truetype");
    font-weight: 400;
    font-style: normal;
  }

/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Message under button ----------------------------- */
  .placeMessageSousBoutton{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65px;
    margin-top: 5px;
    font-size: 12px;
    color: crimson;
  }
  .sizeHomepageLinks{
    font-size: 13px;
    color: #2c3e50;
    padding-bottom: 5px;
  }
  .confirmationInscription{
    font-size: 12px;
    color: darkgreen;
    justify-content: center;
  }
/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Background --------------------------------------- */
.form-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Ring Loader -------------------------------------- */
.loadingRingLoader{
  padding-top: 20px;
}
.loadingRingLoaderHeightCenter{
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Forms Titles ------------------------------------- */
.form-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: bold;
}
.form-title-second {
  font-size: 20px;
  font-weight: bold;
}
/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Forms Input -------------------------------------- */
.form-input {
  width: 220px;
  height: 25px;
  border: none;
  margin: 3px 0;
  border-radius: 5px;
  text-align: center;
}
/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Input Invalid  ----------------------------------- */
  .invalidClass{
    content:"3 caractères minimum";
    border: 1px solid crimson;
    outline: none;
  }
/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Input Birthday ----------------------------------- */
  .form-input-date{
    background-color: white;
    color: grey;
    padding-right: 0px;
    padding-left: 46px;
  }
  .birthdateClass:hover::after{
     content: "";
   }
  .birthdateClass:focus::after{
    content: "";
  }
  .birthdateClass:after{
    content: "Date de naissance";
    position:absolute;
    padding-left: 10px;
    background-color: white;
    z-index: 0;
  }
/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Buttons ------------------------------------------ */
  .form-button {
    align-self: center;
    padding: 3px;
    border: none;
    width: 220px;
    height: 25px;
    margin: 15px 0 0;
    border-radius: 5px;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: #232323;
    font-size: 13px;
  }
  .form-button:focus {
    box-shadow: 0px 2px 2px grey;
    background-color: darkgreen;
    color: white;
  }
  .form-button:hover{
    box-shadow: 0px 2px 2px grey;
    background-color: darkgreen;
    color: white;
  }
/* ------------------------------------------ Button --- Delete --- */
  .form-button-delete {
    align-self: center;
    padding: 3px;
    border: none;
    width: 220px;
    height: 25px;
    margin: 15px 0px 0px;
    border-radius: 5px;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: #232323;
  }
  .form-button-delete:focus{
    box-shadow: 0px 2px 2px grey;
    background-color: crimson;
    color: white;
  }
  .form-button-delete:hover{
    box-shadow: 0px 2px 2px grey;
    background-color: crimson;
    color: white;
  }
/* ------------------------------------------ Button --- Disable --- */
  .form-button-disabled{
    background-color: #b0b0b0;
    color: #8a8a8a;
    cursor: not-allowed;
    pointer-events: none;
  }
/* --------------------------------------------------------------------------------------------- */
</style>
