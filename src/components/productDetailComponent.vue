<template>
  <div v-if="getSelected !== null" class="product-detail-container">
    <div class="detail-container">
      <!--<div class="close-button" v-on:click="close"></div>-->
      <div class="play-button" v-on:click="openFullscreen">
        <img :src="'http://image.tmdb.org/t/p/w500' + getSelected.coverUrl" :alt="getSelected.title" class="selected-product-image">
      </div>

      <div class="detail-text">
        <div class="detail-title">{{ getSelected.title }}</div><br>
        <input v-model="hdUrl" name="hdUrl" value="HD mp4 url"><br>
        <input v-model="sdUrl" name="hdUrl" value="SD mp4 url"><br>
        <input v-model="sourceUrl" name="hdUrl" value="avi or mkv url">
        <br>
        <button v-on:click="saveProduct">ajouter à la base de donnée</button>
        <a v-if="hdUrl !== null" :href="hdUrl">HD mp4</a>
        <a v-if="sdUrl !== null" :href="sdUrl">SD mp4</a>
        <a v-if="sourceUrl !== null" :href="sourceUrl">Original file</a>
        <!--<div>Date de sortie: {{ selectedProduct.releaseDate }}</div>-->
        <!--<span>Date d'ajout: {{ selectedProduct.addDate }}</span>-->
        <!--<ul>Réalisateurs:-->
        <!--<li v-bind:key="e.id" v-for="e in selectedProduct.directors">-->
        <!--{{ e.firstName }} {{ e.lastName }}-->
        <!--</li>-->
        <!--</ul>-->
        <!--<ul>Acteurs:-->
        <!--<li v-bind:key="a.id" v-for="a in selectedProduct.actors">-->
        <!--{{ a.firstName }} {{ a.lastName }}-->
        <!--</li>-->
        <!--</ul>-->
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
        hdUrl: null,
        sdUrl: null,
        sourceUrl: null
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
      },
      saveProduct() {
        this.createProduct({
          hdUrl: this.hdUrl,
          sdUrl: this.sdUrl,
          sourceFileUrl: this.sourceUrl,
          coverUrl: this.getSelected.coverUrl,
          title: this.getSelected.title,
          synopsis: this.getSelected.synopsis,
        })
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
    max-height: 40vh;
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
    overflow-x: scroll;
    max-height: 35vh;
    padding: 5px;
  }

  .detail-title {
    font-weight: bold;
    font-size: 3vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
  }

  .detail-synopsis {
    position: relative;
    text-align: justify;
    overflow-x: scroll;
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

  .detail-text {
    overflow-x: scroll;
    padding: 0 10px;
  }

</style>
