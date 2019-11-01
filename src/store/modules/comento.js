import axios from '../../plugins/axios'

export default {
  namespaced: true,
  state: {
    categories: []
  },
  getters: {
    CATEGORIES(state) {
      return state.categories || []
    }
  },
  mutations: {
    SAVE_CATEGORIES(state, array) {
      state.categories = array
    }
  },
  actions: {
    GET_ADS(_, payload = {}) {
      const page = payload.page || 1
      const limit = payload.limit || 100

      const options = {
        method: 'get',
        url: '/ads.php',
        params: {
          page,
          limit
        }
      }
      return axios(options)
    },
    GET_CATEGORIES(_) {
      const options = {
        method: 'get',
        url: '/category.php'
      }
      return axios(options)
    },
    GET_POSTS({ state }, payload = {}) {
      const page = payload.page || 1
      const ord = payload.ord || 'asc'
      const category = payload.categories
        ? payload.categories.split(',')
        : state.categories.map(cat => cat.no)

      const options = {
        method: 'get',
        url: '/request.php',
        params: {
          page,
          ord,
          category
        }
      }
      return axios(options)
    },
    GET_POST(_, payload = {}) {
      const req_no = payload.req_no || 0

      const options = {
        method: 'get',
        url: '/detail.php',
        params: {
          req_no
        }
      }
      return axios(options)
    }
  }
}
