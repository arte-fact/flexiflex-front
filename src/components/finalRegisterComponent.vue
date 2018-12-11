<template>
  <div class="final-register-component">
    <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
      <input id="name" v-model="nom" type="text" name="nom" placeholder="Nom">
      <input id="prenom" v-model="prenom" type="text" name="prenom" placeholder="Prenom">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'finalRegister page',
  data () {
    return {
      msg: 'Welcome to final register page'
    }
  }
}
</script>
