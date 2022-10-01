import { createStore } from 'vuex'

export default createStore({
  state: {
    loaded: false,
    opacity: 0,
    grabed: false,
    cmdOpened: true
  },
  getters: {
    loaded(state) {
      return state.loaded
    },
    opacity(state) {
      return state.opacity
    }
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
