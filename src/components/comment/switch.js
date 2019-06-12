import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: false,
      count2:'add'
    },
    mutations: {
      increment (state) {
        //state.count++
        state.count=!state.count
      },
      //公共组件list判断是改还是增
      change(state){
        state.count2='change';
      },
      add(state){
        state.count2='add';
      }
    }
})
export default store