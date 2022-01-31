<template>
<div v-if="movies">
<p>Title: {{movies.result.title}}</p>
</div>
</template>
<script>
  import wretch from 'wretch'

  export default {
    name: 'MovieInfo',
    data() {
      return {
        movies: null
      }
    },
    created() {
      wretch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`)
        .get()
        .json()
        .then((movies) => {
          this.movies = movies
        })
    }
  }
</script>

<style scoped></style>
