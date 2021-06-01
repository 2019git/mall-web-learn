export default {
  cartList(state) {
    return state.cartList
  },

  cartListCount(state, getters) {
    return getters.cartList.length
  }
}
