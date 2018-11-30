<template>
  <div class="login-component">

    <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
      <p>
        <input id="name" v-model="email" type="text" name="email" placeholder="Email">
      </p>
      <p>
        <input id="password" v-model="password" type="password" name="password" placeholder="Mot de passe">
        <p>
          <input id="birthday" v-model="date" type="text" name="age" placeholder="Date de naissance">
        </p>
        <p>
          <input type="submit" value="Submit">
        </p>
        <p class="mt-5 mb-3 text-muted">Vous avez un compte?
          <router-link class="menu-item" to='/login'>
            Connectez-vous
          </router-link>
        </p>
    </form>
  </div>
</template>

<!--
<script>
export default {
  name: 'register page',
  data () {
    return {
      msg: 'Welcome to register page'
    }
  }
}
</script>
-->
