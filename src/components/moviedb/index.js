import MovieDb from './MovieDb.vue'
import MovieInfo from './MovieInfo.vue'

export const routes = [
  {
    name: 'Movies',
    path: '/movies',
    component: MovieDb
  },

  {
    name: 'MovieInfo',
    path: '/movies/:id',
    component: MovieInfo,
    props: (route) => ({ id: route.params.id })
  }
]
