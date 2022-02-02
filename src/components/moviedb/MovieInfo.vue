<template>
  <div v-if="error">Shits Broken yao</div>
  <div v-if="movies">
    <CardSlot class="movieinfo">Title: {{ movies.title }}</CardSlot>
    <CardSlot class="movieinfo"
      >Original Title: {{ movies.original_title }}
    </CardSlot>
    <CardSlot class="movieinfo">Overview: {{ movies.overview }}</CardSlot>
    <CardSlot class="movieinfo"
      ><img
        width="400"
        :src="`https://image.tmdb.org/t/p/original/${movies.poster_path}`"
        :alt="movies.title"
    /></CardSlot>
    <CardSlot class="movieinfo"
      >Release Date: {{ movies.release_date }}
    </CardSlot>
    <CardSlot class="movieinfo">Rating: {{ movies.vote_average }}</CardSlot>
    <CardSlot class="movieinfo">Votes: {{ movies.vote_count }}</CardSlot>
  </div>
</template>
<script>
  import wretch from 'wretch'
  import CardSlot from '../CardSlot.vue'

  export default {
    name: 'MovieInfo',
    components: { CardSlot },
    data() {
      return {
        movies: null,
        pix: null,
        error: false
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
        })
        .catch((error) => {
          console.error(error)
          this.error = true
        })
    }
  }
</script>

<style scoped lang="sass">
  .movieinfo
    width: 430px
</style>
