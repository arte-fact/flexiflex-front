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
    padding: 0 0 20px 10px;
    min-width: 100%;
    width: 100%;
    color: #2c3e50;
    text-shadow: 1px 1px 1px #cdcdcd;
    font-size: 14px;


    /*border: 5px solid #ff03d3;*/
  }

  .copyright{
    position: relative;
    filter: drop-shadow(1px 1px 1px #cdcdcd);
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
