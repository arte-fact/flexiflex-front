<template>
    <div class="search-input-container">
      <input id="search-input" class="form-input search-input" name="research" v-model="input" placeholder="Rechercher votre film ici...">
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
        isTyping: false,
        isFlexiSearch: false,
        input: '',
        page: 1
      }
    },
    created () {
      // this.requestProducts()
      // this.imdbSearch()
    },
    watch: {
      isTyping(oldValue, newValue) {
        if (newValue === false && oldValue !== newValue) {
          this.unSelectProduct()
          this.setSearchParams({
            media: 'movie',
            input: this.input,
          })
          this.getNextResultPages(2)
        }
      },
      input(newValue) {
        if (newValue.length > 2) {
          this.isTyping = true
          setTimeout(function () {
            this.isTyping = false
          }.bind(this), 100)
        }
      },
    },
    computed: {
      ...mapGetters('products', [
        'products',
        'getResults'
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
        'getNextResultPages'
      ])
    }
  }
</script>

<style scoped>
  .search-input-container {
    position: relative;
    display: flex;
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
