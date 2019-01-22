<template>
  <div class="border">
    <div v-bind:class="{ fullHeight: getSelected === null}">
      <div v-if="products !== null">
        <div class="product-list">
          <div v-bind:key="product.id" v-for="product in products">
            <div  class="product-item" v-on:click="select(product)">
              <img :alt="product.title" class="product-image" :src="'http://image.tmdb.org/t/p/w154' + product.coverUrl">
              <div class="product-title">{{product.title}}</div>
            </div>
          </div>
          <br>
          <div v-if="products !== null && products !== []" v-on:click="getNextResultPages(2)" class="list-bottom" ref="bottom">Charger la suite</div>
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
      products: [],
      searchBarMessage: 'Rechercher ici des contenus'
    }
  },
  computed: {
    ...mapGetters('products', [
      'getSelected',
      'getProducts',
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
    if (this.products === null) {
      this.requestProducts()
    }
  },
  watch: {
    getProducts(newValue) {
      if(newValue !== null) {
        this.products.push(newValue)
      }
    },
    getResults(newValue) {
      if (newValue == null) {
        this.products = []
      } else {
        this.products.push(newValue)
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
      'getNextResultPages'
    ]),
    select(product) {
      this.selectProduct(product)
    },
  }
}
</script>

<style scoped>

  @keyframes fade {
    0% {
      opacity: 0;
      background: black;
    }
    100% {
      opacity: 1;
      background: transparent;
    }
  }


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
    transition: 15s linear fade;
  }
  .product-image {
    position: relative;
    height: 166px;
    width: 133px;
    background-color: grey;
  }
  .loader-container {
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .list-bottom {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
    color: #2c3e50;
  }
</style>
