




<template>
  <ul v-if="movies">
    <li v-for="movie in movies.results" :key="movie.id">{{ movie.title }}</li>
  </ul>
</template>

<script>
  import wretch from 'wretch'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'MovieDb',
    data() {
      return {
        movies: null
      }
    },

    created() {
      wretch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
        .get()
        .json()
        .then((movies) => {
          this.movies = movies
        })
    }
  }
</script>

<style scoped></style>
