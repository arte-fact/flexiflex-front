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
        isFlexiSearch: true,
        input: '',
        isRequesting: false
      }
    },
    created () {
      this.requestProducts()
      // this.imdbSearch()
    },
    watch: {
      input(oldValue, newValue) {
        this.unSelectProduct()
        if (!this.isRequesting && newValue.length > 0 && newValue !== '') {
          if (this.isFlexiSearch) {
            this.requestProducts()
          } else {
            this.imdbSearch(newValue)
          }
        } else {
          this.requestProducts()
        }
      },
    },
    computed: {
      ...mapGetters('products', [
        'products'
      ])
    },
    methods:{
      ...mapActions('products', [
        'addProduct',
        'flushProduct',
        'requestProducts',
        'selectProduct',
        'unSelectProduct'
      ]),
      displayResults(response) {
        this.flushProduct()
        this.id = 0;
        response.body.results.forEach(function (result) {
          if (result.poster_path !== 'undefined' && result.poster_path != null) {
            this.addProduct({
              urls: JSON.stringify({
                cover: result.poster_path
              }),
              title: result.title,
              id: this.id,
              synopsis: result.overview,
              releaseDate: result.release_date,
              addDate: 'unknown'
            })
          }
          this.id += 1
        }, this)
      },
      imdbSearch() {
        this.isRequesting = true;
        Vue.http.post('http://api.themoviedb.org/3/search/movie?api_key=b9e5550676ff70a2c33461f55fac000c&query=' + this.input + '&language=fr',
          {
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          }).then(
          response => {
            this.displayResults(response)
            this.isRequesting = false;
          },
          response => {
            this.isRequesting = false;
          }
        )
      },
      flexiSearch() {
        this.isRequesting = true;
        Vue.http.post('http://api.themoviedb.org/3/search/movie?api_key=b9e5550676ff70a2c33461f55fac000c&query=' + this.input + '&language=fr',
          {
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          }).then(
          response => {
            this.displayResults(response)
            this.isRequesting = false;
          },
          response => {
            this.isRequesting = false;
          }
        )
        Vue.http.post('http://api.themoviedb.org/3/search/tv?api_key=b9e5550676ff70a2c33461f55fac000c&query=' + this.input + '&language=fr',
          {
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          }).then(
          response => {
            this.displayResults(response)
            this.isRequesting = false;
          },
          response => {
            this.isRequesting = false;
          }
        )
      }
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
