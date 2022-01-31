<template></template>
<div v-if="movie">
<p>Title: {{movie.title}}</p>
</div>
<script>
  import wretch from 'wretch'

  export default {
    name: 'MovieInfo',
    data() {
      return {
        movie: null
      }
    },
    created() {
      wretch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1${this.$route.params.id}`)
        .get()
        .json()
        .then((movie) => {
          this.movie = movie
        })
    }
  }
</script>

<style scoped></style>
