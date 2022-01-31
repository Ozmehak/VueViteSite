import { createStore } from 'vuex'
import wretch from 'wretch'

// State holds all data
const state = {
  message: 'STORE TEXT',
  movies: null,
  loadingMovies: false
}

// Mutations modify the data in the state
const mutations = {
  setMessage(state, message) {
    state.message = message
  },
  setMovies(state, movies) {
    state.movies = movies.results
  },
  setLoadingMovies(state, loading) {
    state.loadingMovies = loading
  }
}

// Getters let us fetch data from the state
const getters = {
  message: (state) => state.message,
  movies: (state) => state.movies,
  loadingMovies: (state) => state.loadingMovies
}

// Actions are used by components to update the state
const actions = {
  setMessage(store, message) {
    store.commit('message', message)
  },
  getMovies(store) {
    if (store.state.movies || store.state.loadingMovies) return
    store.commit('setLoadingMovies', true)

    return wretch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=382a51f2c6fef6132227dddb86062db6&language=en-US&page=1`
    )
      .get()
      .json()
      .then((movies) => {
        store.commit('setMovies', movies)
        store.commit('setLoadingMovies', false)
      })
  }
}

export default createStore({ mutations, state, getters, actions, strict: true })
