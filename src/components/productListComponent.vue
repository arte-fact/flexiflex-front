<template>
  <div class="product-list-container">
    <div class="background" v-if="products !== null">
      <div class="title">Catalogue</div>
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
      'selectProduct'
    ]),
    select(product) {
      this.selectProduct(product)
    }
  }
}
</script>

<style scoped>

  .product-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: scroll;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 150px;
    cursor: pointer;
    margin-right: 10px;
    z-index: 1;
  }

  .product-image {
    height: 200px;
    width: 150px;
    background-color: grey;
  }


  .background {
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    padding: 20px;
  }

</style>
