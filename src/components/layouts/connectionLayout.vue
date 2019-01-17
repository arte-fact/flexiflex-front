<template>
  <div>
    <div class="flexiflex-logo">Flexiflex</div>
    <div class="body-content">
      <div class="global-layout-container body-background">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import FooterLayout from './footerComponent.vue'
  import HeaderLayout from './headerComponent.vue'

  export default {
    name: "connection-layout",
    components: [
      FooterLayout,
      HeaderLayout
    ]
  }
</script>

<style scoped>
  .global-layout-container {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .body-background {
    position: absolute;
    background-color: #cccccc;
  }

  .body-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flexiflex-logo {
    position: relative;
    display: flex;
    width: 100%;
    font-family: "vegan", fantasy;
    font-size: 100px;
    padding: 20px;
    text-shadow: 4px 4px 10px #cdcdcd;
    justify-content: center;
  }
</style>

