<template>
  <div v-if="movies">
    <p>Title: {{ movies.title }}</p>
    <p>Original Title: {{ movies.original_title }}</p>
    <p>Overview: {{ movies.overview }}</p>
    <img
      width="400"
      :src="`https://image.tmdb.org/t/p/original/${movies.poster_path}`"
      :alt="movies.title"
    />
    <p>Release Date: {{ movies.release_date }}</p>
    <p>Rating: {{ movies.vote_average }}</p>
    <p>Votes: {{ movies.vote_count }}</p>
  </div>
</template>
<script>
  import wretch from 'wretch'

  export default {
    name: 'MovieInfo',
    data() {
      return {
        movies: null,
        pix: null
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
