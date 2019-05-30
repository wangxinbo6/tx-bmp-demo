import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: false
    },
    mutations: {
      increment (state) {
        //state.count++
        state.count=!state.count
      }
    }
})
export default store