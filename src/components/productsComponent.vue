<template>
  <div class="product-list-container">
    <div v-if="products !== null">
      <div class="product-list">
        <div v-bind:key="product.id" v-for="product in products">
          <div class="product-item" v-on:click="select(product)">
            <img :alt="product.title" class="product-image" src="">
            <div class="product-title">{{product.title}}</div>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <ring-loader class="background" v-if="products === null" :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
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

export default {
  name: 'products',
  data() {
    return {
      colorRingLoader: '#2c3e50',
      sizeRingLoader: '200px'
    }
  },
  computed: {
    ...mapGetters('products', [
      'products'
    ])
  },
  components: {
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
      'resetProducts'
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
    margin: 10px;
    width: 90vw;
    height: 80vh;
    overflow-x: scroll;
  }

  .product-list {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 150px;
    cursor: pointer;
    z-index: 1;
    margin: 5px;
  }

  .product-image {
    height: 200px;
    width: 150px;
    background-color: grey;
  }

</style>
