<script>
  import { mapActions, mapGetters } from 'vuex'
  import CardSlot from '../CardSlot.vue'

  export default {
    components: { CardSlot },
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
  <CardSlot class="movehz" v-else>
    <ol>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="`/movies/${movie.id}`">
          {{ movie.title }}
        </router-link>
      </li>
    </ol>
  </CardSlot>
</template>

<style scoped lang="sass">
  .movehz
    width: 430px
</style>
