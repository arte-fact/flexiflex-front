<template>
  <div class="splash container is-fluid">
    <router-link to="/login"><button class="login" id="connexion">Connexion</button></router-link>
    <router-link to="/register"><button class="login" id="inscription">Inscription</button></router-link>
    <h1 class="title is-1">{{ title }}</h1>
    <p class="subtitle is-2">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'splash',
  data () {
    return {
      title: 'Bienvenue sur Flexiflex!',
      subtitle: 'Votre plateform de streaming ;)'
    }
  }
}
</script>
<style>
  body {
    margin: auto;
/*    background: url('../assets/home_background.png');*/
  }
  .login {
    position: relative;
    top: 0;
    float: right;
  }
</style>
