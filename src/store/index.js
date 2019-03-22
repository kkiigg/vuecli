import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
<<<<<<< HEAD

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
=======
const store=new Vuex.store({
  state:{
    count:0,
  },
  mutations:{
    increase(state){
      state.count++;
    }
  },
  getters:{
    getCount(state{
      return  'count is'+state.count
    }
  } 
})
export default store;
>>>>>>> a7ce1e37f57136798d8ca1b007216aeb99632504
