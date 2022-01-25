<template>
  <div v-if="city">
    <p>Name: {{ city.name }}</p>
    <p>Pop: {{ city.population }}</p>
  </div>
</template>

<script>
  import wretch from 'wretch'

  export default {
    name: 'CitiesDetails',
    data() {
      return {
        city: null
      }
    },
    created() {
      wretch(`https://avancera.app/cities/${this.$route.params.id}`)
        .get()
        .json()
        .then((city) => {
          this.city = city
        })
    }
  }
</script>

<style scoped></style>
