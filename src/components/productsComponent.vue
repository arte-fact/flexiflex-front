<template>
  <div class="border">
    <div
      v-bind:class="{ fullHeight: getSelected === null}"
    >
      <div v-if="products !== null">
        <div class="product-list">
          <div v-bind:key="product.id" v-for="product in products">
            <div class="product-item" v-on:click="select(product)">
              <img :alt="product.title" class="product-image" :src="'http://image.tmdb.org/t/p/w154' + JSON.parse(product.urls).cover">
              <div class="product-title">{{product.title}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="loader-container" v-else>
        <!--<ring-loader color="#2c3e50" size="200px"></ring-loader>-->
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
      'products',
      'getSelected'
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
    ]),
    select(product) {
      this.selectProduct(product)
    }
  }
}
</script>

<style scoped>

  .border{
    position: relative;
    /*border: 5px solid #ff861c;*/
    /*padding-top: 150px;*/
  }

  .product_list_container {
    position: relative;
    bottom: 0;
    overflow-x: scroll;
  }
  .fullHeight {
    position: relative;
    bottom: 0;
    overflow-x: scroll;
    height: 86vh;
  }
  .mid_height {
    position: relative;
    bottom: 0;
    overflow-x: scroll;
    height: 43vh;
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
    width: 100px;
    cursor: pointer;
    z-index: 1;
    margin: 0 5px 5px 0;
  }
  .product-image {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: grey;
  }
  .loader-container {
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
</style>
