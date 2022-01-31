import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import { routes as moviesRoutes } from '../components/moviedb'
import Doggos from '../components/doggos/DogComponent.vue'

const routes = [
  {
    name: 'Doggos',
    path: '/doggos',
    component: Doggos
  },
  {
    name: 'Home',
    path: '/',
    component: HelloWorld
  },
  ...moviesRoutes
]

export default createRouter({
  history: createWebHistory(),
  routes
})
