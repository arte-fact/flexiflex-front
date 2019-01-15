<template>
  <div class="home-component">
    <div v-if="user == null">Chargement...</div>
    <h1 v-else>Bienvenue chez vous, {{user.email}}!</h1>
    <button v-on:click="doLogout">Logout</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home-page',
  data() {
    return {
      email: "",
      products: null,
    }
  },
  computed: {
    ...mapGetters('auth', [
      'token',
      'user',
      'userRequestFail'
    ])
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
