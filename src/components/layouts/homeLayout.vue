<template>
  <div>
    <div class="body-content">
      <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import FooterLayout from './footerComponent.vue'
  import HeaderLayout from './headerComponent.vue'

  export default {
    name: "home-layout",
    components: [
      FooterLayout,
      HeaderLayout
    ]
  }
</script>

<style scoped>

  .global-layout-container {
    display: flex;
    justify-content: center;
  }

  .body-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 65px;
    height: 100%;
    width: 100%;
  }

</style>

