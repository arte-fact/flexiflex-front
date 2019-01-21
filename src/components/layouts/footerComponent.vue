<template>
    <div class="container">
      <span class="copyright"><i class="far fa-copyright"></i></span>
      <span class="flexiflex">Flexiflex</span>
      <div class="year positionCenter"> {{this.whatYearAreWe}} </div>
    </div>
</template>

<script>
    export default {
        name: "footer-layout",
      data() {
        return {
          whatYearAreWe: null,
        }
      },
        created() {
        let today = Date.now();
        this.whatYearAreWe = new Date(today).getFullYear();
      }
    }
</script>

<style scoped>
  .container{
    position: fixed;
    display: flex;
    bottom: 0;
    height: 25px;
    color: #2c3e50;
    text-shadow: 1px 1px 1px #cdcdcd;
    font-size: 14px;
    min-width: 99%;
    width: 99%;
  }

  .copyright{
    position: relative;
    filter: drop-shadow(1px 1px 1px #cdcdcd);


    /*margin-left: 6px;*/
  }
  .flexiflex{
    position: relative;
    font-family: "vegan", fantasy;
    margin-left: 6px;
  }
  .year{
    font-family: fantasy;
    margin-left: 6px;
  }
</style>
