import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './Mutations'
import Getters from './Getters'
import Actions from './Actions'

Vue.use(Vuex)

const state = {
  cartList: [
    {
      id: '1',
      img: 'http://img14.360buyimg.com/n7/jfs/t1/167017/13/11752/194131/6048d129Ee6994e87/f6619ceae126b328.jpg',
      title: 'DGPZ长袖衬衫女2021夏韩版商务休闲正装衬衣棉质免烫抗皱职业通勤工作服',
      price: '129.00',
      count: 1,
      check: true
    }
  ]
}

export default new Vuex.Store({
  state: state,
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
})
