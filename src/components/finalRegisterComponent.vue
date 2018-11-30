<template>
  <div class="final-register-component">

    <form class="form-signin" @submit.prevent="submit" action="https://" method="post">
      <p>
        <input id="name" v-model="nom" type="text" name="nom" placeholder="Nom">
      </p>
        <p>
          <input id="prenom" v-model="prenom" type="text" name="prenom" placeholder="Prenom">
        </p>
        <p>
          <input type="submit" value="Submit">
        </p>

    </form>
  </div>
</template>

<!--
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
-->
