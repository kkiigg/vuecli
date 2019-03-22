import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
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