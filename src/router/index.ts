import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import { routes as citiesRoutes } from '../components/cities'
import Ducks from '../components/ducks/DogComponent.vue'
const routes = [
  {
    name: 'Ducks',
    path: '/ducks',
    component: Ducks
  },
  {
    name: 'Home',
    path: '/',
    component: HelloWorld
  },
  ...citiesRoutes
]

export default createRouter({
  history: createWebHistory(),
  routes
})
