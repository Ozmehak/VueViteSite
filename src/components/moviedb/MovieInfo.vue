<template>
  <div>
    <p>Title: {{ movies.original_title }}</p>
    <img />
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
    props: {
      id: {
        type: String,
        required: true
      }
    },
    created() {
      // @ts-ignore
      const apiKey = import.meta.env.VITE_API_KEY

      wretch(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=${apiKey}&language=en-US&page=1`
      )
        .get()
        .json()
        .then((movies) => {
          this.movies = movies
          console.log('donkeh')
        })
    }
  }
</script>

<style scoped></style>
