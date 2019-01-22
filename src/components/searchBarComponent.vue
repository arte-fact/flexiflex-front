<template>
    <div class="search-input-container">
      <input id="search-input" class="form-input search-input" name="research" v-model="input" placeholder="Rechercher votre film ici...">
      <div v-if="!isFlexiSearch" class="url_inputs">
        <input class="form-input search-input" v-model="hdUrl" name="hdUrl" placeholder="Lien vers le fichier .mp4" required>
        <input class="form-input search-input" v-model="sdUrl" name="hdUrl" value="SD mp4 url" placeholder="" hidden>
        <input class="form-input search-input" v-model="sourceUrl" name="hdUrl" placeholder="Lien vers le fichier source" required>
        <div class="buttonPlace">
          <button class="form-button box-checked-button" v-on:click="saveProduct" v-bind:class="{send_button_invalid: hdUrl === null || sdUrl === null || sourceUrl === null}">Ajouter</button>
          <button class="form-button-delete box-checked-button" v-on:click="deleteProduct()">Supprimer</button>
        </div>
      </div>
      <input type="checkbox" id="checkbox" class="checkbox" v-model="isFlexiSearch">
      <div  v-on:click=search()><i class="fab fa-searchengin loupe"></i></div>
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
          this.search()
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
        if (this.sourceUrl !== null && this.hdUrl !== null && this.sdUrl !== null) {
          this.createProduct({
            hdUrl: this.hdUrl,
            sdUrl: this.sdUrl,
            sourceFileUrl: this.sourceUrl,
            coverUrl: this.getSelected.coverUrl,
            title: this.getSelected.title,
            synopsis: this.getSelected.synopsis,
          })
        }
      },
      deleteProduct() {
        let strings = [
          "Savez vous au moins ce que vous faites?",
          "Pas sur que ce soit possible...",
          "En êtes vous bien sur?"
        ]

        alert(strings[Math.floor(Math.random() * 3)])
      },
      search(){
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
    }
  }
</script>

<style scoped>
  .send_button_invalid {
    color: gray;
    background-color: #9d9d9d;
    pointer-events: none;
  }

  .url_inputs {
    position: relative;
    display: block;
    align-items: center;
    justify-content: center;
  }
  .search-input-container {
    position: relative;
    align-self: center;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: center;
    min-width: 950px;
    width: 50%;
    z-index: 3;
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
  }
  .search-input::placeholder{
    align-items: center;
    font-size: 12px;
  }

  .loupe{
    position: absolute;
    right: -25px;
    top:2.5px;
    margin: 5px 40px 5px 0;
    display:inline-block;
    width: 30px;
    height: 30px;
    outline: none;
    cursor: pointer;
    color : #959595;

  }
  .checkbox{
    -webkit-appearance: none;
    position: absolute;
    right: -25px;
    top:2.5px;
    margin: 5px 75px 5px 0;
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
  .buttonPlace{
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .box-checked-button{
    width: 49.5%;
  }

  @media screen and (max-width: 970px)  {
    .search-input-container {
      width: 100%;
      min-width: 100%;
    }
  }
</style>
