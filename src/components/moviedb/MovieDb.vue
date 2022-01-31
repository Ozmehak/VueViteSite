<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        error: null
      }
    },
    computed: {
      ...mapGetters(['movies', 'message', 'loadingMovies'])
    },
    methods: {
      ...mapActions(['getMovies'])
    },
    created() {
      this.getMovies()
        .catch((error) => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
</script>
<template>
  <div v-if="loadingMovies">Loading movies...</div>
  <div v-else-if="error">{{ error }}</div>
  <ol v-else>
    <li v-for="movie in movies" :key="movie.id">
      <router-link :to="`/movies/${movie.id}`">
        {{ movie.title }}
      </router-link>
    </li>
  </ol>
</template>

<style scoped></style>
