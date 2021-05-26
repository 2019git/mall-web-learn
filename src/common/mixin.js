/* 混入类 */
import {debounce} from '@/common/utils'

export const imgLoadScrollRefreshListenerMixin = {
  data() {
    return {
      imgLoadScrollRefreshListener: null
    }
  },
  mounted() {
    // 通过$bus接收事件，用于 非父子组件的通信
    this.imgLoadScrollRefreshListener = () => {
      debounce(this.$refs.scroll.refresh, 100)();
    }
    this.$bus.$on('goodsImgLoad', this.imgLoadScrollRefreshListener)
  }
}
