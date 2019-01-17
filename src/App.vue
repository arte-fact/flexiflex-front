<template>
  <div id="app">
    <div v-bind:style="styleObject"></div>
    <router-view/>
    <footerLayout></footerLayout>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import footerLayout from './components/layouts/footerComponent.vue'

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
          content: '',
          backgroundImage : null,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'black',
          opacity: 0.8,
          zIndex: -2,
          position: 'fixed',
          width: '100%',
          height: '100%',
          transform: 'scaleX(1.1)',
        }
      }
    },
    created() {
      this.imageNumber = Math.ceil( Math.random() * 7 )

      this.setTokenFromCookie()

      if (window.innerWidth <= 812) {
        this.styleObject.backgroundImage = 'url(' + require('@/assets/homepage_MaxWidth_600/background-splash-medium-' + this.imageNumber + '.jpg')
        console.log(this.styleObject)
      } else {
        this.styleObject.backgroundImage = 'url(' + require('@/assets/homepage/background-splash-' + this.imageNumber + '.jpg')
        console.log(this.styleObject)
      }
      // if (this.token === null) {
      //   this.$router.push({
      //     name: 'login-page'
      //   })
      // }
    },
    watch: {
      // token (newValue) {
      //   if (newValue === null) {
      //     this.$router.push({
      //       name: 'login-page'
      //     })
      //   }
      // },

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
        'token'
      ])
    },
    components: {
      footerLayout
    },
  }
</script>

<style>
html {
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  color: #1d1d1d;
  background: black;
}

body {
  height: 100%;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  bottom: 0;
  user-select: none;
}

  @font-face {
    font-family: "vegan";
    src: url('./assets/vegan.ttf') format("truetype");
    font-weight: 400;
    font-style: normal;
  }

/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Alignement du site ------------------------------- */
.centerDisplayFlexColumn{
  display: flex;
  flex-direction: column;
  width: 96.5vw;
  height : 100vh;

  /*border: 1px solid #29ce12;*/
}

  .centerDisplayFlex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /*border: 1px solid #00ffff;*/
  }

<<<<<<< HEAD
  .centerDisplayFlexColumn{
     display: flex;
     flex-direction: column;
     width: 96.5vw;
   }
=======
>>>>>>> 0a103998db931656979c6771ded1be3f3895e649



  .reverse-primary {
    background-color: transparent;
    color: #e6e6e6;
  }

  .form-title {
    font-size: 45px;
    font-weight: bold;
  }

  .form-title-second {
    font-size: 20px;
    font-weight: bold;
  }

  .center{
    text-align: center;
    align-items: center;
    padding : 85px 90px;
  }

  .form-component {
    width: 320px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
  }

  /*.centerDisplayFlexRow{*/
    /*position: relative;*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*align-items: initial;*/
    /*min-height: 65px;*/

  /*}*/

  /*.centerDisplayFlexRowRight{*/
    /*!*padding-top: 6px;*!*/
    /*padding-top: 2px;*/
    /*position: absolute;*/
    /*right: 0;*/
    /*align-self: center;*/
    /*!*border: 1px solid #dcd521;*!*/
  /*}*/

  .placeMessageSousBoutton{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65px;
    width: 100%;
    margin-top: 5px;
    font-size: 12px;
    color: crimson;
  }

  .errorSaisieRegister{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 100%;
    margin-top: 5px;
    font-size: 12px;
    color: crimson;
  }

  .sizeHomepageLinks{
    font-size: 13px;
    color: #2c3e50;
    padding-bottom: 5px;
  }

  .ok{
    font-size: 12px;
    color: darkgreen;
  }

  .flexiflex-logo {
    font-family: "vegan", fantasy;
    font-size: 100px;
    padding: 20px;
    text-shadow: 4px 4px 10px #cdcdcd;
  }

  /*.flexiflex-logo-HomePage {*/
    /*font-family: "vegan", fantasy;*/
    /*font-size: 40px;*/
    /*text-shadow: 4px 4px 10px #cdcdcd;*/
    /*text-decoration: none;*/
    /*color: #2c3e50;*/
  /*}*/
/*.flexiflex-logo-HomePage:hover {*/
  /*font-family: "vegan", fantasy;*/
  /*font-size: 40px;*/
  /*text-shadow: 4px 4px 10px #cdcdcd;*/
  /*text-decoration: none;*/
/*}*/

  .form-input {
    width: 220px;
    height: 25px;
    border: none;
    padding: 5px;
    margin: 2px;
    border-radius: 5px;
    text-align: center;
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
    margin: 15px 0px 0px;
    border-radius: 5px;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
  .form-button:focus {
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
  }
  .form-button-delete:hover{
    box-shadow: 0px 2px 2px grey;
    background-color: crimson;
    color: white;
  }
  .form-button:hover{
    box-shadow: 0px 2px 2px grey;
    background-color: darkgreen;
    color: white;
  }
/* ------------------------------------------ Button --- Disable --- */
  .form-button-disabled{
    background-color: #b0b0b0;
    color: #8a8a8a;
    cursor: not-allowed;
    pointer-events: none;
  }
/* ------------------------------------------ Button --- User Account   --- */
  .useraccount-button{
    border: none;
    width: auto;
    height: 20px;
    border-radius: 5px;
    background-color: #2c3e50;
    color: #cdcdcd;
    cursor: pointer;
  }
<<<<<<< HEAD

  .reverse-primary {
    background-color: transparent;
    color: #e6e6e6;
  }

  .form-title {
    font-size: 45px;
    font-weight: bold;
  }

  .form-title-second {
    font-size: 20px;
    font-weight: bold;
  }
  .login-component-background {
    position: absolute;
    height: 240px;
    width: 300px;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    z-index: -1;
  }

  .register-component-background {
     position: absolute;
     height: 280px;
     width: 300px;
     border-radius: 5px;
     background-color: #cccccc;
     opacity: 0.9;
     z-index: -1;
   }

  .finalRegister-component-background {
    position: absolute;
    height: 280px;
    width: 300px;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    z-index: -1;
  }

  .useraccount-component-background {
    position: absolute;
    height: 220px;
    width: 480px;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    z-index: -1;

  }

  .center{
    text-align: center;
    align-items: center;
    padding : 85px 90px;
  }

  .loadingRingLoader{
    padding-top: 20px;
  }

  .loadingRingLoaderHeightCenter{
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-component {
    width: 320px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
  }

  .useraccount-form-component {
    width: 480px;
    margin: 5px;
    padding-top: 10px;
    border-radius: 5px;
  }
</style>
