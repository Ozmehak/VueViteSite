<template>

  <p>{{ movies }}</p>
<!--  <ol>
    <li v-for="movie in movies" :key="movie.title"></li>
  </ol>-->

</template>

<script>
  import wretch from 'wretch'

  export default {
    name: 'MovieDetails',
    data() {
      return {
        movies: null
      }
    },

    created() {
      wretch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=382a51f2c6fef6132227dddb86062db6&language=en-US&page=1'
      )
        .get()
        .json()
        .then(({movies}) => {
          this.movies = movies
        })
    }
  }
</script>

<style scoped></style>
