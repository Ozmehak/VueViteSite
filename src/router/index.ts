import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import { routes as citiesRoutes} from '../components/cities'

const routes = [
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
