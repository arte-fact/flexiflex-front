<template>
  <div id="app" class="primary">
    <div class="flexiflex-logo primary">
      <span class="title-left">flexiflex</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  background: url(../src/assets/background-splash.jpg);
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
}
  @font-face {
    font-family: "vegan";
    src: url('./assets/vegan.ttf') format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  .flexiflex-logo {
    margin: 50px;
  }
  .title-left {
    font-family: "vegan", fantasy;
    font-size: 100px;
    padding: 20px;
    text-shadow: 1px 1px 2px grey;
  }

  .form-input {
    border: none;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
  }
  .form-button {
    align-self: center;
    border: none;
    margin: 10px 40px;
    border-radius: 5px;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    height: 27.5px;
    justify-content: center;
    align-items: center;
  }

  .form-button:hover {
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
