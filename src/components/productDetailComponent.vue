<template>
  <div v-if="getSelected !== null" class="container background">
    <div class="close-button" v-on:click="close"></div>
    <div class="form-title">{{ selectedProduct.title }}</div>
    <div class="row">
      <div class="column">
        <img :alt="selectedProduct.title" class="selected-product-image" src="">
        <div class="form-button" v-on:click="isPlaying = true">Lecture</div>
        <div>Date de sortie: {{ selectedProduct.releaseDate }}</div>
        <div>Date d'ajout: {{ selectedProduct.addDate }}</div>
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
      </div>
      <p class="selected-product-detail selected-product-synopsis">{{ selectedProduct.synopsis }}</p>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'product-detail-component',
    data () {
      return {
        selectedProduct: null
      }
    },
    computed: {
      ...mapGetters('products', [
        'getSelected'
      ])
    },
    watch: {
      getSelected(newValue) {
         this.selectedProduct = newValue;
      }
    },
    methods: {
      ...mapActions('products', [
        'unSelectProduct'
      ]),
      close() {
        this.unSelectProduct()
      }
    }
  }
</script>

<style>
  .close-button {
    position: absolute;
    right: 10px;
    top: 10px;
    font-weight: bold;
    padding: 3px;
    margin: 3px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: ease 0.3s;
  }

  .close-button:before, .close-button:after {
    position: absolute;
    content: "";
    width: 80%;
    height: 20%;
    background-color: #2c3e50;
    border-radius: 20%;
    transform-origin: center;
    transform: translateX(-10px) translateY(10px) rotateZ(45deg);
  }

  .close-button:after {
    transform: translateX(-10px) translateY(10px) rotateZ(-45deg);
  }

  .selected-product-image {
    display: flex;
    height: 400px;
    width: 300px;
    background-color: grey;
  }

  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 320px;
    right: 10px;
  }
</style>
