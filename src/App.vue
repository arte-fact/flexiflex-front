<template>
  <div id="app" class="primary">
    <div v-bind:style="styleObject">


    </div>
    <div class="flexiflex-logo primary">
      <span class="title-left">Flexiflex</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

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

    this.setAuthHeaderFromCookie()

    if (window.innerWidth <= 812) {
      this.styleObject.backgroundImage = 'url(' + require('@/assets/homepage_MaxWidth_600/background-splash-medium-' + this.imageNumber + '.jpg')
    } else {
      this.styleObject.backgroundImage = 'url(' + require('@/assets/homepage/background-splash-' + this.imageNumber + '.jpg')
    }
  },
    methods: {
      ...mapActions('auth', [
        'setAuthHeader',
        'setAuthHeaderFromCookie'
      ]),
    }

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

html::before {
  position: fixed;
  content: '';
  z-index: 1;
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  animation: ease-in fade 0.5s;
  opacity: 0;
  pointer-events: none;
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
    margin: 50px;
  }

  .title-left {
    font-family: "vegan", fantasy;
    font-size: 100px;
    padding: 20px;
    text-shadow: 4px 4px 10px #cdcdcd;

  }

  .form-input {
    width: 220px;
    height: 25px;
    border: none;
    padding: 5px;
    margin: 2px;
    border-radius: 5px;
    text-align: center;
  }

  .invalidClass{
    content:"3 caractères minimum";
    border: 1px solid #ff0000;
    outline: none;
  }

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

  .form-button:hover{
    box-shadow: 0px 2px 2px grey;
    background-color: darkgreen;
    color: white;
  }

  .form-button:focus {
    box-shadow: 0px 2px 2px grey;
    background-color: darkgreen;
    color: white;
  }

  .form-button-disabled{
    background-color: #b0b0b0;
    color: #8a8a8a;
    cursor: not-allowed;
    pointer-events: none;
  }

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

  .center{
    text-align: center;
    align-items: center;
    padding : 85px 90px;
  }

  .loadingRingLoader{
    padding-top: 20px;
  }

  .form-component {
    width: 320px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
  }


@media only screen and (max-width: 812px) {
  .form-component {
    width: 300px;
    padding: 10px;
    border-radius: 5px;
  }

  .form-component-background {
    width: 300px;
  }

  .form-signin .form-input {
    width: 250px;
  }

}
</style>
