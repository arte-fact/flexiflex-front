<template>

  <div class="centerDisplayFlexColumn">

    <div class="centerDisplayFlexRow">

    <div class="flexiflex-logo-HomePage">Flexiflex</div>

      <div class="centerDisplayFlexRowRight">
      <button v-if= "user != null" class="useraccount-button" v-on:click="">Compte {{user.firstName}} {{user.lastName}}</button>
      <button class="useraccount-button" v-on:click="doLogout">Logout</button>
      </div>

    </div>

    <div class="movies-component-background">

      <div class="loadingRingLoaderHeightCenter">
        <br><ring-loader :color="colorRingLoader" :size="sizeRingLoader"></ring-loader>
      </div>

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
  name: 'home-page',
  data() {
    return {
      email: "",
      products: null,
      colorRingLoader: '#2c3e50',
      sizeRingLoader: '200px'
    }
  },
  computed: {
    ...mapGetters('auth', [
      'token',
      'user',
      'userRequestFail'
    ])
  },
  components: {
    RingLoader
  },
  created () {
    if (this.user === null) {
      this.request()
      setTimeout(this.getProducts(), 1500)
    }


  },
  methods: {
    ...mapActions('auth', [
      'requestUser',
      'resetUser',
      'resetToken',
      'setAuthHeaderFromCookie',
      'logout'
    ]),
    request () {
      this.requestUser()
    },
    doLogout() {
      this.resetToken()
      this.resetUser()
    },
    getProducts () {
      this.products = [
        {
          "actors": [
            {
              "id": 0,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 1,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 2,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            }
          ],
          "addDate": "2019-01-15",
          "ageRequired": 0,
          "directors": [
            {
              "id": 0,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 1,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            }
          ],
          "genre": {
            "firstName": "string",
            "id": 0
          },
          "id": 0,
          "releaseDate": "2019-01-15",
          "synopsis": "string",
          "title": "string",
          "url": "string"
        },
        {
          "actors": [
            {
              "id": 0,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 1,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 2,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            }
          ],
          "addDate": "2019-01-15",
          "ageRequired": 0,
          "directors": [
            {
              "id": 0,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 1,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            }
          ],
          "genre": {
            "firstName": "string",
            "id": 0
          },
          "id": 2,
          "releaseDate": "2019-01-15",
          "synopsis": "string",
          "title": "string",
          "url": "string"
        },
        {
          "actors": [
            {
              "id": 0,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 1,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 2,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            }
          ],
          "addDate": "2019-01-15",
          "ageRequired": 0,
          "directors": [
            {
              "id": 0,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 1,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            }
          ],
          "genre": {
            "firstName": "string",
            "id": 0
          },
          "id": 0,
          "releaseDate": "2019-01-15",
          "synopsis": "string",
          "title": "string",
          "url": "string"
        },
        {
          "actors": [
            {
              "id": 0,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 1,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 2,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            }
          ],
          "addDate": "2019-01-15",
          "ageRequired": 0,
          "directors": [
            {
              "id": 0,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            },
            {
              "id": 1,
              "identity": {
                "firstName": "string",
                "id": 0,
                "lastName": "string"
              }
            }
          ],
          "genre": {
            "firstName": "string",
            "id": 0
          },
          "id": 2,
          "releaseDate": "2019-01-15",
          "synopsis": "string",
          "title": "string",
          "url": "string"
        },
      ]
    }
  }
}
</script>
