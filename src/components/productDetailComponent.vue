<template>
  <div v-if="getSelected !== null" class="product-detail-container">
    <div class="detail-container">
      <div class="close-button" v-on:click="close"></div>
      <div class="play-button" v-on:click="openFullscreen">
        <img :src="'http://image.tmdb.org/t/p/w500' + getSelected.urls.coverUrl" :alt="getSelected.title" class="selected-product-image">
      </div>
      <div class="detail-text">
        <div class="detail-title">{{ getSelected.title }}</div><br>
        <a v-if="getSelected.urls.sourceFileUrl !== null" :href="getSelected.urls.sourceFileUrl">Original file</a>
        <div class="detail-synopsis">{{ getSelected.synopsis }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'product-detail-component',
    data () {
      return {
        urls: null
      }
    },
    computed: {
      ...mapGetters('products', [
        'getSelected'
      ])
    },
    methods: {
      ...mapActions('products', [
        'toggleIsPlaying',
        'createProduct'
      ]),
      close() {
        this.unSelectProduct()
      },
      openFullscreen() {
        this.toggleIsPlaying()
      }
    }
  }
</script>

<style scoped>
  .selected-product-image {
    position: relative;
    display: flex;
    width: auto;
    background-color: grey;
    max-height: 50vh;
    min-height: 30vh;
  }
  .detail-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 50%;
    margin-bottom: 5px;
  }
  .detail-text {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    max-height: 33vh;
    padding: 0 10px;
    overflow-Y: auto;
    overflow-x: hidden;
  }
  .detail-title {
    font-weight: bold;
    font-size: 3vh;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .detail-synopsis {
    position: relative;
    text-align: justify;
  }
  .play-button {
    position: relative;
    left: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    cursor: pointer;
    padding: 0;
  }
  .play-button:hover:after {
    content: "";
    position: absolute;
    background: black;
    color: #cccc;
    opacity: 0.6;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/play_button.png');
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
