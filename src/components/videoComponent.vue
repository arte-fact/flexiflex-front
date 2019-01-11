<template xmlns:v-video-player="http://www.w3.org/1999/xhtml">
  <section class="container">
    <div class="login-component-background">
      <video width="100%" height="auto" controls>
        <source
          :src="videoUrl"
          type="video/mp4">
      </video>
    </div>
  </section>
</template>


<script>
  export default {
    name: 'video-page',

    data () {
      return {
        videoUrl: 'http://62.210.148.177:9001/flexiflex/kingsman.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=flexiflexadmin%2F20190111%2F%2Fs3%2Faws4_request&X-Amz-Date=20190111T115624Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=03150dcf0ab56edb5ab32341ac478addfc6cb7a4461922e0b1152fcfabf980c1'
      }
    }
  }

</script>


<style>
  .container {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

</style>
