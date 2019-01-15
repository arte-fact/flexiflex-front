<template>
    <div class="movies-component-background">
      <div class="loadingRingLoaderHeightCenter">
        <ring-loader v-if="products === null" :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
        <div v-if="selectedProduct !== null">
          <img class="selected-product-image" src="">
          <div class="selected-title">{{ selectedProduct.title }}</div>
          <p>Synopsis: {{ selectedProduct.synopsis }}</p>
        </div>
        <ul class="product-list" v-else>
          <li v-bind:key="product.id" v-for="product in products">
            <div class="product-item" v-on:click="selectProduct()">
              <img class="product-image" src="">
              <div class="product-title">{{product.title}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import RingLoader from 'vue-spinner/src/RingLoader.vue'

Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'product-list',
  data() {
    return {
      selectedProduct: null,
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
    RingLoader
  },
  created () {
    if (this.products === null) {
      this.requestProducts()
    }


  },
  methods: {
    ...mapActions('products', [
      'requestProducts'
    ]),
    selectProduct() {
      console.log('caca')
      // this.selectedProduct = product
    }
  }
}
</script>

<style scoped>
  .product-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
  }

  .product-item {
    margin: 10px;
    width: 300px;
    cursor: pointer;
  }

  .product-image {
    height: 400px;
    width: 300px;
    background-color: grey;
  }

  .selected-product-image {
    height: 600px;
    width: 450px;
    background-color: grey;
  }
</style>
