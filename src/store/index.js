import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './Mutations'
import Getters from './Getters'
import Actions from './Actions'


Vue.use(Vuex)

const state = {}

export default new Vuex.Store({
  state: state,
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
})
