<template>
    <div class="background">
      <div>
        <ring-loader class="loadingRingLoaderHeightCenter" v-if="products === null" :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
        <div class="selected-product-item" v-if="selectedProduct !== null">
          <img class="selected-product-image" src="">
          <div class="selected-product-detail">
            <div class="selected-title">{{ selectedProduct.title }}</div>
            <div>Date de sortie: {{ selectedProduct.releaseDate }}</div>
            <div>Date d'ajout: {{ selectedProduct.addDate }}</div>
            <p>Synopsis: {{ selectedProduct.synopsis }}</p>
            <ul>Réalisateurs:
              <li v-bind:key="e.id" v-for="e in selectedProduct.directors">
                {{ e.firstName }} {{ e.lastName }}
              </li>
            </ul>
            <ul>Acteurs:
              <li v-bind:key="a.id" v-for="a in selectedProduct.actors">
                {{ a.firstName }} {{ a.lastName }}
              </li>
            </ul>
            <div class="close-button" v-on:click="closeSelected">X</div>
          </div>
        </div>
        <div class="product-list" v-if="products !== null">
          <div v-bind:key="product.id" v-for="product in products">
            <div class="product-item" v-on:click="selectProduct(product)">
              <img :alt="product.title" class="product-image" src="">
              <div class="product-title">{{product.title}}</div>
            </div>
          </div>
        </div>
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
    selectProduct(product) {
      this.selectedProduct = product
    },
    closeSelected () {
      this.selectedProduct = null
    }
  }
}
</script>

<style scoped>
  .selected-product-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .close-button {
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
    cursor: pointer;
  }

  .product-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-flow: wrap;
    border: 1px solid yellow;
    margin-top: 10px;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    cursor: pointer;
    z-index: 1;
    margin-right: 10px;
    border: 1px solid yellow;
  }

  .selected-product-item {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: wrap;
    margin: 0;
    padding: 0;
    border: 1px solid yellow;
  }

  .product-image {
    height: 200px;
    width: 150px;
    background-color: grey;
  }

  .selected-product-image {
    display: flex;
    height: 400px;
    width: 300px;
    background-color: grey;
    border: 1px solid yellow;

  }

  .background {
    height: auto;
    width: 100%;
    border-radius: 5px;
    background-color: #cccccc;
    opacity: 0.9;
    padding: 10px;
  }
</style>
