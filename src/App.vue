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
  <button class="btn btn-secondary" @click="goTo('Home')">Home</button>
  <button class="btn btn-secondary" @click="goTo('Cities')">Cities</button>
  <button class="btn btn-secondary" @click="goTo('Doggos')">Doggoplz</button>
</template>

<style scoped lang="sass">
.btn
  margin-left: 10px
</style>
