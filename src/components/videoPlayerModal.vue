<template xmlns:v-video-player="http://www.w3.org/1999/xhtml">
  <div v-if="isPlaying && getSelected !== null">
    <video id="myvideo" v-on:click="toggleIsPlaying" class="video-player" width="100%" height="auto" controls>
      <source
        :src="getSelected.hdUrl"
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
    opacity: 0.9;
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
