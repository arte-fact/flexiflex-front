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
    </div>
    <ring-loader class="background" v-if="products === null" :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import ProductDetail from './productListComponent.vue'
import VideoPlayerModal from './productListComponent.vue'

Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'product-list',
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
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-flow: wrap-reverse;
    width: 100%;
    height: 100%;
    top: 65px;
    overflow-x: scroll;
  }

  .product-list {
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    width: 100%;
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
