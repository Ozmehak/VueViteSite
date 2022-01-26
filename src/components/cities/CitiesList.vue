<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        error: null
      }
    },
    computed: {
      ...mapGetters(['cities', 'message', 'loadingCities'])
    },
    methods: {
      ...mapActions(['getCities'])
    },
    created() {
      this.getCities()
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
  <div v-if="loadingCities">Loading cities...</div>
  <div v-else-if="error">{{ error }}</div>
  <ol v-else>
    <li v-for="city in cities" :key="city.id">
      <router-link :to="`/cities/${city.id}`">
        {{ city.name }}
      </router-link>
    </li>
  </ol>
</template>
