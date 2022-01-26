import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import { routes as citiesRoutes } from '../components/cities'
import Ducks from '../components/doggos/DogComponent.vue'

const routes = [
  {
    name: 'Doggos',
    path: '/doggos',
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
