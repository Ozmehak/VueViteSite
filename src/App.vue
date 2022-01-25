<script>
  import MyComponent from './components/MyComponent.vue'
import Ducks from './components/ducks/ducks.vue'
  export default {
    components: {
      MyComponent,

    },
    Ducks,
    methods: {
      goTo(name) {
        this.$router.push({ name })
      }
    }
  }
</script>

<template>
  <MyComponent />
  <router-view />

  <router-link to="/">Hello</router-link> <router-link to="/cities">Cities</router-link>
  <button @click="goTo('Home')">Home</button>
  <button @click="goTo('Cities')">Cities</button>
  <button @click="getDemDucks()">Duckplz</button>
</template>
