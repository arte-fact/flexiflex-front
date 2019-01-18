<template>
  <div>
    <div class="product-list-container">
      <div v-if="products !== null">
        <div class="product-list">
          <div v-bind:key="product.id" v-for="product in products">
            <div class="product-item" v-on:click="select(product)">
              <img :alt="product.title" class="product-image" :src="'http://image.tmdb.org/t/p/w154' + product.cover">
              <div class="product-title">{{product.title}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="loader-container" v-if="products === null">
        <ring-loader color="#2c3e50" size="200px"></ring-loader>
      </div>
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
      searchBarMessage: 'Rechercher ici des contenus'
    }
  },
  computed: {
    ...mapGetters('products', [
      'products'
    ])
  },
  components: {
    ProductDetailComponent,
    VideoPlayerModal,
    RingLoader,
    ProductDetail
  },
  created () {
    if (this.products === null) {
      this.requestProducts()
    }
  },
  methods: {
    ...mapActions('products', [
      'requestProducts',
      'selectProduct',
      'resetProducts',
      'getSelected'
    ]),
    select(product) {
      this.selectProduct(product)
    }
  }
}
</script>

<style scoped>

  .product-list-container {
    position: relative;
    display: flex;
    justify-content: stretch;
    width: 100%;
    height: 50vh;
    overflow-x: scroll;
    top: 0;
    padding: 30px;
  }

  .product-list {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    height: 50%;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 150px;
    cursor: pointer;
    z-index: 1;
    margin: 0 5px 5px 0;
  }

  .product-image {
    height: 200px;
    width: 150px;
    background-color: grey;
  }

  .loader-container {
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

</style>
