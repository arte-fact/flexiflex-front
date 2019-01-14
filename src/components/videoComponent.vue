<template xmlns:v-video-player="http://www.w3.org/1999/xhtml">
  <div class="container">
    <div class="player-background">
      <video class="player" width="100%" height="auto" controls>
        <source
          :src="videoUrl"
          type="video/mp4">
      </video>
      <h2 class="title">
        Kingsman : Le Cercle d'or
      </h2>
      <p>KINGSMAN, l’élite du renseignement britannique en costume trois pièces, fait face à une menace sans précédent. Alors qu’une bombe s’abat et détruit leur quartier général, les agents font la découverte d’une puissante organisation alliée nommée Statesman, fondée il y a bien longtemps aux Etats-Unis.
        Face à cet ultime danger, les deux services d’élite n’auront d’autre choix que de réunir leurs forces pour sauver le monde des griffes d’un impitoyable ennemi, qui ne reculera devant rien dans sa quête destructrice. </p>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'video-page',

    data () {
      return {
        videoUrl: 'http://62.210.148.177:9001/flexiflex/kingsman.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=flexiflexadmin%2F20190111%2F%2Fs3%2Faws4_request&X-Amz-Date=20190111T115624Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=03150dcf0ab56edb5ab32341ac478addfc6cb7a4461922e0b1152fcfabf980c1'
      }
    }
  }

</script>


<style>
  .container {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .player-background {
    height: auto;
    width: 100%;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    padding: 10px;
  }

  .player {
    position: relative;
    opacity: 1 important;
  }

</style>
