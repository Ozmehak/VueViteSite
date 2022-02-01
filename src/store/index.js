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
let moviesPromise
const actions = {
  setMessage(store, message) {
    store.commit('message', message)
  },
  getMovies(store) {
    if (store.state.movies || store.state.loadingMovies) return moviesPromise
    store.commit('setLoadingMovies', true)

    const apiKey = import.meta.env.VITE_API_KEY

    moviesPromise = wretch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .get()
      .json()
      .then((movies) => {
        store.commit('setMovies', movies)
        store.commit('setLoadingMovies', false)
      })
      .catch((e) => {
        store.commit('setLoadingMovies', false)
        throw e
      })
    return moviesPromise
  }
}

export default createStore({ mutations, state, getters, actions, strict: true })
