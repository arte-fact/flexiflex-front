<template>
    <div class="search-input-container">
      <input v-on:click="input = ''" id="search-input" class="form-input search-input" name="research" v-model="input"><span>(admin)</span>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import VueResource from 'vue-resource'
  import { mapActions } from 'vuex'

  Vue.use(VueResource)
  Vue.use(Vuex);

  export default {
    name: "search-bar",
    data () {
      return {
        input: 'star wars',
        isRequesting: false
      }
    },
    created () {
      this.search(this.input)
    },
    watch: {
      input(oldValue, newValue) {
        if (!this.isRequesting && newValue.length > 2 && newValue !== null) {
          this.search(newValue)
        }
      }
    },
    methods:{
      ...mapActions('products', [
        'addProduct',
        'flushProduct',
        'requestProducts',
        'selectProduct'
      ]),
      displayResults(response) {
        this.flushProduct()
        this.id = 0;
        response.body.results.forEach(function (result) {
          if (result.poster_path !== 'undefined' && result.poster_path != null) {
            console.log(result)
            this.addProduct({
              cover: result.poster_path,
              title: result.title,
              id: this.id,
              synopsis: result.overview,
              releaseDate: result.release_date,
              addDate: 'unknown'
            })

            if (this.id === 0) {
              this.selectProduct({
                cover: result.poster_path,
                title: result.title,
                id: this.id,
                synopsis: result.overview
              })
            }
          }
          this.id += 1
        }, this)
      },
      search() {
        this.isRequesting = true;

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
  .search-input {
    height: 40px;
    width: 100%;
    font-size: 20px;
    text-align: left;
    font-weight: bold;
    border-radius: 20px;
    padding-left: 20px;
  }
  .search-input-container {
    position: fixed;
    display: flex;
    width: 50%;
    top: 10px;
    z-index: 3;
    left: 25%;
    height: 40px;
  }
</style>
