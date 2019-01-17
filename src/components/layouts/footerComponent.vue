<template>
    <div class="container">
      <div class="copyright positionCenter"><i class="far fa-copyright"></i></div>
      <div class="flexiflex positionCenter">Flexiflex</div>
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
     bottom: 0;
    /*width: 96.5vw;*/
    /*min-width: 96.5vw;*/
    /*height:26px;*/
    /*min-height: 26px;*/
    /*margin-top: 0.3vh;*/
    /*margin-bottom: 0.3vh;*/
    /*font-size: 15px;*/
    /*color: #2c3e50;*/
    /*text-shadow: 1px 1px 1px #cdcdcd;*/
     border: 1px solid lime;
  }
  .positionCenter{
    position: absolute;
    top: 50%;
    transform: translate(0%,-50%);
  }
  .copyright{
    left: 0;
    filter: drop-shadow(1px 1px 1px #cdcdcd);
  }
  .flexiflex{
    left: 20px;
    font-family: "vegan", fantasy;
  }
  .year{
    left: 80px;
    font-family: fantasy;
  }
</style>
