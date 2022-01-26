import CitiesList from './CitiesList.vue'
import CitiesDetails from './CitiesDetails.vue'

export const routes = [
  {
    name: 'Cities',
    path: '/cities',
    component: CitiesList
  },
  {
    name: 'CitiesDetails',
    path: '/cities/:id',
    component: CitiesDetails
  }
]
