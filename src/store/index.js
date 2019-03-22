import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increase (state) {
      state.count++
    }
  },
  getters: {
    getCount (state) {
      return 'count is' + state.count
    }
  }
})
export default Store
