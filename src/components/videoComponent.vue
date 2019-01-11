<template xmlns:v-video-player="http://www.w3.org/1999/xhtml">
  <section class="container">
    <div class="video-player-box"
         :playsinline="playsinline"
         @play="onPlayerPlay($event)"
         @pause="onPlayerPause($event)"
         @ended="onPlayerEnded($event)"
         @loadeddata="onPlayerLoadeddata($event)"
         @waiting="onPlayerWaiting($event)"
         @playing="onPlayerPlaying($event)"
         @timeupdate="onPlayerTimeupdate($event)"
         @canplay="onPlayerCanplay($event)"
         @canplaythrough="onPlayerCanplaythrough($event)"
         @ready="playerReadied"
         @statechanged="playerStateChanged($event)"
         v-video-player:myVideoPlayer="playerOptions">
    </div>
  </section>
</template>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>

<script>
  export default {
    name: 'video-page',
    data () {
      return {
        // component options
        playsinline: true,

        // videojs options
        playerOptions: {
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }],
        }
      }
    },
    mounted() {
      // console.log('this is current player instance object', this.myVideoPlayer)
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
      },
      // player is ready
      playerReadied(player) {
      }
    }
  }
</script>

