<template>
  <div class="login-component">

    <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
<!--      <p>-->
        <input id="name" v-model="email" type="text" name="email" placeholder="Email">
<!--      </p>-->
<!--      <p>-->
        <input id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
<!--      </p>-->
<!--      <p>-->
        <input type="submit" value="Submit">
<!--      </p>-->
      <p class="mt-5 mb-3 text-muted">Vous nouveau sur Flexiflex?
        <router-link class="menu-item" to='/register'>
          Inscrivez-vous
        </router-link>
      </p>
    </form>
  </div>
</template>

<!--
<script>
  export default {
    name: 'login page',
    data() {
      return {
      }
    }
  }
</script>-->
