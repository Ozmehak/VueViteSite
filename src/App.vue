<script>
  import MyComponent from './components/MyComponent.vue'

  export default {
    components: {
      MyComponent
    },

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

  <router-link to="/">Hello</router-link>
  <router-link to="/cities">Cities</router-link>
  <button @click="goTo('Home')">Home</button>
  <button @click="goTo('Cities')">Cities</button>
  <button @click="goTo('Ducks')">Duckplz</button>
</template>
