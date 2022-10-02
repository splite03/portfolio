import { createStore } from 'vuex'

export default createStore({
  state: {
    loaded: false,
    opacity: 0,
    grabed: false,
    cmdOpened: false,
    browserOpened: false,
    folderOpened: false,
    window: ''
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
    preClick(state,selector){
      document.querySelector(selector).style.border = `2px solid rgb(225, 225, 225)`
      document.querySelector(selector).style.borderTop = `2px solid rgb(72, 72, 72)`
      document.querySelector(selector).style.borderLeft = `2px solid rgb(72, 72, 72)`
    },
    afterClick(state,selector){
      document.querySelector(selector).style.border = `2px solid rgb(72, 72, 72)`
      document.querySelector(selector).style.borderTop = `2px solid rgb(225, 225, 225)`
      document.querySelector(selector).style.borderLeft = `2px solid rgb(225, 225, 225)`
    },
    grabHeader(state){
      state.grabed = true
    },
    dropHeader(state){
      state.grabed = false
    },
    currentWindow(state, add){
      state.window = add

      try{
        document.querySelector('.active-window').classList.remove('active-window')
        document.querySelector(`.console-header`).style.background = 'linear-gradient(to right, grey, lightgrey)'
        document.querySelector(`.browser-header`).style.background = 'linear-gradient(to right, grey, lightgrey)'
      }catch{}
      setTimeout(() => {
        document.querySelector(`.${add}`).classList.add('active-window')
        document.querySelector(`.${add}-header`).style.background = 'linear-gradient(to right, blue, lightblue)'
      }, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
