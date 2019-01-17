<template xmlns:v-video-player="http://www.w3.org/1999/xhtml">
  <div v-if="isPlaying && getSelected !== null">
    <div class="container"></div>
    <video id="video-player" class="video-player" width="100%" height="auto" controls>
      <source
        :src="videoUrl"
        type="video/mp4">
    </video>
    <div class="close-button video-close-button" v-on:click="isPlaying = false">Close</div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex);
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'video-player-modal',
    data () {
      return {
        videoUrl: 'http://62.210.148.177:9001/flexiflex/kingsman.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=flexiflexadmin%2F20190111%2F%2Fs3%2Faws4_request&X-Amz-Date=20190111T115624Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=03150dcf0ab56edb5ab32341ac478addfc6cb7a4461922e0b1152fcfabf980c1'
      }
    },
    computed: {
      ...mapGetters('products', [
        'isPlaying',
        'getSelected'
      ])
    },
  }
</script>

<style scoped>
  .container {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: black;
    opacity: 0.5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
  }

  .video-player {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 1;
    top: 0;
    left: 0;
  }

</style>
