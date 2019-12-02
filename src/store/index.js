import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    _scrollTop: 0  // 存储组件的scrollTop值

  },
  mutations: {
    updatePosition (state, payload) {
      state._scrollTop = payload.top  // 更改scrollTop值
    }

  },
  actions: {
    updatePosition ({commit}, top) { 
      commit({type: 'updatePosition', top: top}) // 提交mutation 更改状态
    }
    
  },
  modules: {
  }
})
