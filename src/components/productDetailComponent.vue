<template>
  <div v-if="getSelected !== null" class="product-detail-container">
    <div class="detail-container">
      <!--<div class="close-button" v-on:click="close"></div>-->
      <div class="play-button" v-on:click="toggleIsPlaying">
        <img :src="'http://image.tmdb.org/t/p/w500' + selectedProduct.cover" :alt="selectedProduct.title" class="selected-product-image">
      </div>

      <div class="detail-text">
        <div class="detail-title">{{ selectedProduct.title }}</div>

        <div>Date de sortie: {{ selectedProduct.releaseDate }}</div>
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
        <p class="detail-synopsis">{{ selectedProduct.synopsis }}</p>
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
        selected: null
      }
    },
    computed: {
      ...mapGetters('products', [
        'getSelected'
      ])
    },
    watch: {
      getSelected(newValue) {
         this.selectedProduct = newValue;
      }
    },
    methods: {
      ...mapActions('products', [
        'toggleIsPlaying'
      ]),
      close() {
        this.unSelectProduct()
      }
    }
  }
</script>

<style scoped>
  .selected-product-image {
    position: relative;
    display: flex;
    height: 30vh;
    width: 20vh;
    min-width: 20vh;
    background-color: grey;
    padding: 5px;
  }

  .product-detail-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 20px;
    height: 38vh;
    width: 100vw;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .detail-container {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }

  .detail-title {
    font-weight: bold;
    font-size: 4vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .detail-synopsis {
    position: relative;
    text-align: justify;
  }

  .play-button {
    display: block;
    justify-content: center;
    cursor: pointer;
  }

  .play-button:hover:after {
    content: "";
    position: absolute;
    background: black;
    color: #cccc;
    opacity: 0.6;
    left: 20px;
    right: 0;
    width: 20vh;
    height: 30vh;
    padding: 5px;
    top: 20px;
    background-image: url('../assets/play_button.png');
    background-position: center;
    background-repeat: no-repeat;
  }

  .detail-text {
    overflow-x: scroll;
    padding: 0 10px;
  }

</style>
