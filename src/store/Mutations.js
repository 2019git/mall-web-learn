export default {
  addCart: function (state, info) {
    console.log(info);
    console.log(state.cartList);
    const goods = state.cartList.find(item => item.id === info.id);
    if (goods) {
      goods.count = goods.count + 1
    } else {
      info.count = 1
      info.check = true
      state.cartList.push(info)
    }
  }
}
