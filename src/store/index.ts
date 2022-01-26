import { createStore } from 'vuex'
import wretch from 'wretch'

// State holds all data
const state = {
  message: 'STORE TEXT',
  cities: null,
  loadingCities: false
}

// Mutations modify the data in the state
const mutations = {
  setMessage(state, message) {
    state.message = message
  },
  setCities(state, cities) {
    state.cities = cities
  },
  setLoadingCities(state, loading) {
    state.loadingCities = loading
  }
}

// Getters let us fetch data from the state
const getters = {
  message: (state) => state.message,
  cities: (state) => state.cities,
  loadingCities: (state) => state.loadingCities
}

// Actions are used by components to update the state
const actions = {
  setMessage(store, message) {
    store.commit('message', message)
  },
  getCities(store) {
    if (store.state.cities || store.state.loadingCities) return
    store.commit('setLoadingCities', true)
    return wretch('https://avancera.app/cities/')
      .get()
      .json()
      .then((cities) => {
        store.commit('setCities', cities)
        store.commit('setLoadingCities', false)
      })
  }
}

export default createStore({ mutations, state, getters, actions, strict: true })
