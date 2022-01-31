import MovieDb from './MovieDb.vue'
import MovieInfo from './MovieInfo.vue'

export const routes = [
  {
    name: 'Movies',
    path: '/movies',
    component: MovieDb
  },

  {name: 'MovieInfo',
  path: '/movieinfo/:id',
  component: MovieInfo}
]
