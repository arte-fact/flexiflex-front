<template>
  <div class="border">
      <div v-if="products !== null">
        <div class="product-list mid_height" v-bind:class="{ fullHeight: isFullHeight}">
          <div v-bind:key="product.id" v-for="product in products">
            <div  class="product-item" v-on:click="select(product)">
              <img :alt="product.title" class="product-image" :src="'http://image.tmdb.org/t/p/w154' + product.coverUrl">
              <div class="product-title">{{product.title}}</div>
            </div>
          </div>
          <!--<br>-->
          <div class="list-bottom-container">
            <button v-if="products !== null && products !== []" v-on:click="getNextResultPages(2)" class="list-bottom" ref="bottom">Afficher la suite...</button>
          </div>
        </div>
      </div>
      <!--<div class="loader-container" v-else>-->
        <!--&lt;!&ndash;<ring-loader color="#2c3e50" size="200px"></ring-loader>&ndash;&gt;-->
      <!--</div>-->
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
    getSelected(newValue) {
      if (newValue === null) {
        console.log("################null#################")
        this.isFullHeight = true
      } else {
        console.log("******************pas null************")
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
      'getNextResultPages'
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
    /*flex-direction: column;*/
    /*flex-flow: wrap;*/
    /*justify-content: space-between;*/
    margin-bottom: 10px;
    /*overflow-y: scroll;*/
    overflow-y: hidden;
    /*border: 5px solid #ff861c;*/
  }

  .product_list_container {
    position: relative;
    bottom: 0;
    overflow-x: scroll;
    /*border: 2px solid #ff4418;*/
  }

  .mid_height {
    position: relative;
    bottom: 0;
    overflow-x: scroll;
    height: 48vh;
    /*border: 2px solid #ecff1a;*/
  }

  .fullHeight {
    position: relative;
    bottom: 0;
    overflow-x: scroll;
    height: 78vh;
    /*border: 2px solid #4325ff;*/
  }

  .product-list {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    /*border: 5px solid #31fff8;*/
    /*overflow-X: hidden;*/
  }

  .product-item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100px;
    cursor: pointer;
    z-index: 1;
    margin: 0 5px 5px 0;
    /*border: 2px solid #4b0709;*/
  }

  .product-image {
    position: relative;
    height: 166px;
    width: 133px;
    background-color: grey;
    /*border: 2px solid #297c1a;*/
  }

  .loader-container {
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    /*border: 2px solid #ff03d3;*/
  }

  .list-bottom-container{
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%
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

  .list-bottom:hover{
    background-color: #e1e1e1;
    color : #777777;
  }

  @media screen and (max-width: 970px)  {
    .list-bottom {
      width: 100%;
      min-width: 100%;
    }
  }
</style>
