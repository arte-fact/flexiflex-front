<template>
  <div class="border">
    <div class="bucket-nav">
      <div class="bucket-button" v-on:click="openBucket('transmission')">
        <div class="product-title">Transmission</div>
      </div>
      <div class="bucket-button" v-on:click="openBucket('series')">
        <div class="product-title">Series</div>
      </div>
      <div class="bucket-button" v-on:click="openBucket('films')">
        <div class="product-title">Films</div>
      </div>
    </div>
    <div v-if="folders !== null">
      <div class="product-list">
        <div v-bind:key="item.id" v-for="item in folders">
          <div class="product-item" v-on:click="openFolder(item.title)">
            <img :alt="item.title" class="folder-image" :src="item.urls.coverUrl">
            <div class="product-title">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="medias !== null">
      <div class="product-list">
        <div v-bind:key="item.id" v-for="item in medias">
          <div  class="product-item" v-on:click="select(item)">
            <img :alt="item.title" class="folder-image" :src="item.urls.coverUrl">
            <div class="product-title">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="products.length != 0">
      <div class="product-list">
        <div v-bind:key="product.id" v-for="product in products">
          <div  class="product-item" v-on:click="select(product)">
            <img :alt="product.title" class="product-image" :src="'http://image.tmdb.org/t/p/w154' + product.urls.coverUrl">
            <div class="product-title">{{product.title}}</div>
          </div>
        </div>
        <div v-if="products !== null" class="list-bottom-container">
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
      medias: null,
      folders: null,
      bucket: 'transmission',
      prefix: '',
      searchBarMessage: 'Rechercher ici des contenus'
    }
  },
  computed: {
    ...mapGetters('products', [
      'getSelected',
      'getProducts',
      'getMedias',
      'getFolders',
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
    this.requestMedias({
      bucket: this.bucket,
      prefix: this.prefix
    })
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
      if (this.medias == null) {
        this.medias = []
      }
      console.log(newValue.name)
      this.medias.push(newValue)
    },
    getFolders(newValue) {
      if (this.folders == null) {
        this.folders = []
      }
      console.log(newValue.name)
      this.folders.push(newValue)
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
    openFolder (prefix) {
      this.medias = []
      this.folders = []
      this.products = []
      this.prefix = prefix
      this.requestMedias({
        bucket: this.bucket,
        prefix: this.prefix
      })
    },
    openBucket (bucket) {
      this.medias = []
      this.folders = []
      this.products = []
      this.bucket = bucket
      this.prefix = ''
      this.requestMedias({
        bucket: bucket,
        prefix: ''
      })
    },
  }
}
</script>

<style scoped>
  .bucket-nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .bucket-button {
    position: relative;
    padding: 20px;
    text-align: center;
  }
  .bucket-button:hover {
    background-color: #cccc;
    cursor: pointer;
  }

  .product-title {
    max-height: 80px;
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
  .folder-image {
    position: relative;
    height: 133px;
    width: 133px;
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
