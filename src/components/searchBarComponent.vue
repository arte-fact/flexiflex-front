<template>
    <div class="search-input-container">
      <input id="search-input" class="form-input search-input" name="research" v-model="input" placeholder="Rechercher votre film ici...">
      <div v-if="!isFlexiSearch" class="url_inputs">
        <input class="form-input search-input" v-model="hdUrl" name="hdUrl" value="HD mp4 url" placeholder="Lien vers le fichier .mp4" required><br>
        <input class="form-input search-input" v-model="sdUrl" name="hdUrl" value="SD mp4 url" placeholder="" hidden>
        <input class="form-input search-input" v-model="sourceUrl" name="hdUrl" value="avi or mkv url" placeholder="Lien vers le fichier source" required>
        <br>
        <button class="form-button" v-on:click="saveProduct">ajouter à la base de donnée</button>
      </div>
      <input type="checkbox" id="checkbox" class="checkbox" v-model="isFlexiSearch">
    </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import VueResource from 'vue-resource'
  import { mapActions, mapGetters } from 'vuex'

  Vue.use(VueResource)
  Vue.use(Vuex);

  export default {
    name: "search-bar",
    data () {
      return {
        hdUrl: null,
        sdUrl: 'bouchon',
        sourceUrl: null,
        isTyping: false,
        isFlexiSearch: true,
        input: '',
        page: 1
      }
    },
    created () {
      this.requestProducts()
    },
    watch: {
      isTyping(oldValue, newValue) {
        if (newValue === false && oldValue !== newValue) {
          if (this.isFlexiSearch) {
            this.unSelectProduct()
            this.setProducts(null)
            this.requestProducts()
          } else {
            this.unSelectProduct()
            this.setProducts(null)
            this.setSearchParams({
              media: 'movie',
              input: this.input,
            })
            this.getNextResultPages(3)
          }
        }
      },
      input(newValue) {
        if (newValue.length > 0) {
          this.isTyping = true
          setTimeout(function () {
            this.isTyping = false
          }.bind(this), 500)
        }
      },
    },
    computed: {
      ...mapGetters('products', [
        'products',
        'getResults',
        'getSelected'
      ])
    },
    methods:{
      ...mapActions('products', [
        'addProduct',
        'setProducts',
        'flushProduct',
        'requestProducts',
        'selectProduct',
        'unSelectProduct',
        'setSearchParams',
        'getNextResultPages',
        'createProduct'
      ]),
      saveProduct() {
        this.createProduct({
          hdUrl: this.hdUrl,
          sdUrl: this.sdUrl,
          sourceFileUrl: this.sourceUrl,
          coverUrl: this.getSelected.coverUrl,
          title: this.getSelected.title,
          synopsis: this.getSelected.synopsis,
        })
      }
    }
  }
</script>

<style scoped>
  .url_inputs {
    width: 100%;
  }
  .search-input-container {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: center;
    width: 50%;
    z-index: 3;
    left: 25%;
    margin-bottom: 10px;

    /*border: 5px solid #3a5fdc;*/
  }
  .search-input {
    position: relative;
    height: 40px;
    width: 100%;
    font-size: 20px;
    text-align: left;
    align-content: center;
    font-weight: bold;
    border-radius: 20px;
    padding-left: 20px;
    outline: none;

    /*border: 1px solid crimson;*/
  }
  .search-input::placeholder{
    align-items: center;
    font-size: 12px;
  }
  .checkbox{
    -webkit-appearance: none;

    position: absolute;
    right: -25px;
    top:2.5px;

    margin: 5px 30px 5px 0;
    display:inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff300;
    border: 2px solid #bbbbbb;
    outline: none;
  }
  .checkbox:checked {
    background-color: #2c3e50;
    border: 2px solid #2c3e50;
    outline: none;
  }
</style>
