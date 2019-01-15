<template>
    <div class="movies-component-background">
      <div class="loadingRingLoaderHeightCenter">
        <br><ring-loader v-if="products === null" :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
      </div>

    </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import RingLoader from 'vue-spinner/src/RingLoader.vue'

Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'product-list',
  data() {
    return {
      email: "",
      colorRingLoader: '#2c3e50',
      sizeRingLoader: '200px'
    }
  },
  computed: {
    ...mapGetters('products', [
      'products'
    ])
  },
  components: {
    RingLoader
  },
  created () {
    if (this.user === null) {
      setTimeout(this.getProducts(), 1500)
    }


  },
  methods: {
    ...mapActions('product', [
      'requestProducts'
    ]),
    getProducts () {
      this.requestProducts()
    }
  }
}
</script>
