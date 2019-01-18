<template xmlns:v-video-player="http://www.w3.org/1999/xhtml">
  <div v-if="isPlaying && getSelected !== null">
    <video v-on:click="toggleIsPlaying" id="video-player" class="video-player" width="100%" height="auto" controls>
      <source
        :src="videoUrl"
        type="video/mp4">
    </video>
    <div class="close-button" v-on:click="toggleIsPlaying">fermer</div>
    <div class="video-player-background">
    </div>
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
        videoUrl: 'http://62.210.148.177:9001/transmission/downloads/L.age.de.glace.4.La.d%C3%A9rive.des.continents.2012.BDrip.x264.aac-titine.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=flexiflexadmin%2F20190118%2F%2Fs3%2Faws4_request&X-Amz-Date=20190118T145116Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=96190ee6a96fdb70324134ab71505f7c7e3916f9ea2713a7e76f9fcd4b3e4298'
      }
    },
    computed: {
      ...mapGetters('products', [
        'isPlaying',
        'getSelected'
      ])
    },
    methods: {
      ...mapActions('products', [
        'toggleIsPlaying'
      ])
    }
  }
</script>

<style scoped>
  .video-player-background {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: black;
    opacity: 0.7;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }

  .video-player {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    opacity: 1;
    top: 15%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    background: black;
  }

  .close-button {
    position: fixed;
    font-weight: bold;
    padding: 3px;
    margin: 10px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: ease 0.3s;
    top: 50px;
    right: 10px;
    z-index: 4;
    opacity: 1;
    color: #cccc;
    border: 1px solid #cccc;
    border-radius: 5px;
  }
  .close-button:hover {
    color: white;
    border: 1px solid white;
  }

</style>
