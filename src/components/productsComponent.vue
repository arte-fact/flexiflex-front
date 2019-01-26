<template>
  <div class="border">
    <div v-if="products.length != 0">
      <div class="product-list">
        <div v-bind:key="product.id" v-for="product in products">
          <div  class="product-item" v-on:click="select(product)">
            <img :alt="product.title" class="product-image" :src="'http://image.tmdb.org/t/p/w154' + product.urls.coverUrl">
            <div class="product-title">{{product.title}}</div>
          </div>
        </div>
        <div class="list-bottom-container">
          <button v-on:click="getNextResultPages(2)" class="list-bottom" ref="bottom">Afficher la suite...</button>
        </div>
      </div>
    </div>
    <div v-else>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import ProductDetail from './productsComponent.vue'
import VideoPlayerModal from './productsComponent.vue'

Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'
import ProductDetailComponent from "./productDetailComponent";

export default {
  name: 'products',
  data() {
    return {
      isFullHeight: true,
      products: [],
      searchBarMessage: 'Rechercher ici des contenus'
    }
  },
  computed: {
    ...mapGetters('products', [
      'getSelected',
      'getProducts',
      'getMedias',
      'getResults'
    ])
  },
  components: {
    ProductDetailComponent,
    VideoPlayerModal,
    RingLoader,
    ProductDetail
  },
  created () {
    this.requestMedias()
    this.requestFolders()
    if (this.getMedias === null) {
    }
  },
  watch: {
    getProducts(newValue) {
      if (newValue == null) {
        this.products = []
      } else {
        this.products.push(newValue)
      }
    },
    getResults(newValue) {
      if (newValue == null) {
        this.products = []
      } else {
        this.products.push(newValue)
      }
    },
    getMedias(newValue) {
      if (newValue == null) {
        this.products = []
      } else {
        this.products.push(newValue)
      }
    },
    getSelected(newValue) {
      if (newValue === null) {
        this.isFullHeight = true
      } else {
        this.isFullHeight = false
      }
    }
  },
  methods: {
    ...mapActions('products', [
      'requestProducts',
      'addProduct',
      'setProducts',
      'selectProduct',
      'resetProducts',
      'getNextResultPages',
      'requestMedias',
      'requestFolders'
    ]),
    select(product) {
      this.selectProduct(product)
    },
  }
}
</script>

<style scoped>
  .product-title {
    max-height: 50px;
    overflow: hidden;
    text-overflow-ellipsis: '...';
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    color: #2c3e50;
  }
  .border{
    position: relative;
    margin-bottom: 10px;
    overflow-y:auto;
  }
  .product-list {
    position: relative;
    bottom: 0;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
  }
  .product-item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100px;
    cursor: pointer;
    z-index: 1;
    margin: 0 5px 5px 0;
  }
  .product-image {
    position: relative;
    height: 166px;
    width: 133px;
    background-color: grey;
  }
  .list-bottom-container{
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .list-bottom {
    position: relative;
    height: 40px;
    min-width: 950px;
    width: 50%;
    border : none;
    border-radius: 20px;
    background-color: #ffff;
    color : #959595;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }
  @media screen and (max-width: 970px)  {
    .list-bottom {
      width: 100%;
      min-width: 100%;
    }
  }
</style>
