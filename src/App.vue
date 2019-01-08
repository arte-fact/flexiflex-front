<template>
  <div id="app" class="primary">
    <div class="flexiflex-logo primary">
      <span class="title-left">Flexiflex</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'

  // data(){
  //
  //
  // },
  //
  // created(){
  //
  //
  //   var countFiles = require('count-files')
  //   // var countFiles = require('url(../src/assets/homepage)')
  //
  //   var stats = countFiles('/assets/homepage', function (err, results) {
  //     console.log('done counting')
  //     console.log(results) // { files: 10, dirs: 2, bytes: 234 }
  //   })
  //   setInterval(function () {
  //     console.log('current count', stats) // { files: 4, dirs: 1, bytes: 34 }
  //   }, 500)
  //
  //   // let backgroundTable=['imageCycle1','imageCycle2'];
  //   // var num = Math.ceil( Math.random() * totalCount );
  //   // document.body.background = 'images/'+num+'.jpg';
  //
  // },
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

html::after {
  content: '';
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(../src/assets/homepage/background-splash-4.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: scaleX(1.1);
  background-color: black;
  opacity: 0.8;
  z-index: -2;
}

body {
  height: 100%;
  width: 100%;
}

html::before {
  position: fixed;
  content: '';
  z-index: 1;
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  animation: ease-in fade 2s;
  opacity: 0;
  pointer-events: none;
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

.error{
     margin: 10px;
     color: crimson;
   }

.ok{
  margin: 10px;
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

  .form-button {
    align-self: center;
    padding: 3px;
    border: none;
    width: 220px;
    height: 25px;
    /*margin: 20px 40px 35px;*/
    margin: 15px 0px 40px;
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

.login-component {
  width: 320px;
  margin: 5px;
}

  .reverse-primary {
    background-color: transparent;
    color: #e6e6e6;
  }

  .form-title {
    font-size: 45px;
    font-weight: bold;
  }

  .login-component-background {
    position: absolute;
    height: 300px;
    width: 300px;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    z-index: -1;
  }
  .login-component {
    padding: 10px;
    border-radius: 5px;
  }


@media only screen and (max-width: 600px) {
  .login-component {
    width: 300px;
    padding: 10px;
    border-radius: 5px;
  }

  .login-component-background {
    width: 300px;
  }

  .form-signin .form-input {
    width: 250px;
  }
}
</style>
