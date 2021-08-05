import Vue from 'vue'
import Vuex from 'vuex'
import paginate from '../ultils'

Vue.use(Vuex)

const url = 'https://api.github.com/users/davidpdrsn/followers?per_page=100'

export default new Vuex.Store({
  state: {
    loading: false,
    data: []
  },
  mutations: {
    SET_LOADING: (state, payload) => {
      state.loading = payload
    },
    SET_DATA: (state, payload) => {
      state.data = payload
    },
  },
  actions: {
    async GET_DATA({commit}) {
      commit('SET_LOADING', true)
      try{
        const response = await fetch(url)
        const data = await response.json()
        commit('SET_DATA', paginate(data))
        console.log(paginate(data))
      }
      catch(error) {
        console.log(error)
      }
      finally {
        commit('SET_LOADING', false)
      }
      
    } 

  },
  modules: {
  }
})
