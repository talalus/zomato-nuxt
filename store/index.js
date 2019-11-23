import Vuex from 'vuex'

const state = () => {
  return {
    currentCity: 297,
    currentPage: 0,
    pageSize: 20,
    currentRestaurant: null,
    restaurants: [],
    cuisines: [],
    categories: [],
    filter: {
      category: null,
      cuisines: null,
      sort: 'rating',
      order: 'desc'
    }
  }
}

const mutations = {
  appendRestaurants(state, payload) {
    state.restaurants.push(...payload)
  },
  setRestaurants(state, payload) {
    state.restaurants = payload
  },
  setCurrentPage(state, payload) {
    state.currentPage = payload
  },
  setCuisines(state, payload) {
    state.cuisines = payload
  },
  setCategories(state, payload) {
    state.categories = payload
  },
  setCurrentResturant(state, payload) {
    state.currentRestaurant = payload
  },
  setFilter(state, payload) {
    state.filter = { ...state.filter, ...payload }
  }
}
const actions = {
  async search({ commit, state }, loadMore) {
    commit('setCurrentPage', loadMore ? state.currentPage + 1 : 0)
    const { data } = await this.$axios.get('search', {
      params: {
        start: state.currentPage * state.pageSize,
        count: state.pageSize,
        ...state.filter
      }
    })
    if (loadMore) {
      commit('appendRestaurants', data.restaurants)
    } else {
      commit('setRestaurants', data.restaurants)
    }
  },
  async getCategories({ commit }) {
    const { data } = await this.$axios.get('categories')
    commit('setCategories', data.categories)
  },
  async getCuisines({ commit, state }) {
    const { data } = await this.$axios.get('cuisines', {
      params: {
        city_id: state.currentCity
      }
    })
    commit('setCuisines', data.cuisines)
  },
  async getRestaurantById({ commit, state }, id) {
    if (state.restaurants.length > 0) {
      const restaurant = state.restaurants.find(
        ({ restaurant }) => restaurant.id === id
      )
      if (restaurant) {
        return commit('setCurrentResturant', restaurant.restaurant)
      }
    }
    const { data } = await this.$axios.get('restaurant', {
      params: {
        res_id: id
      }
    })
    commit('setCurrentResturant', data)
  }
}

const createStore = () => {
  return new Vuex.Store({ state, mutations, actions })
}

export default createStore
