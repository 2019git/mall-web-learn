<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "BetterScroll",
    props: {
      probeType: 0,
      pullUpload: false
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      // 1. 创建BScroll对象
      this.scroll = new BScroll(
        this.$refs.wrapper,{
          //BetterScroll 默认会阻止浏览器的原生 click 事件,配置启用click 事件
          click: true,
          //BetterScroll会阻止原生的click事件，我们可以设置tap为 'tap'，它会在区域被点击的时候派发一个tap事件，你可以像监听原生事件那样去监听它。
          tab: 'tap',
          //当滚动超过边缘的时候会有一小段回弹动画。设置为true则开启动画。
          bounce: {
            top: true,
            bottom: true
          },
          //决定是否派发 scroll 事件，对页面的性能有影响,0不派发，3任何时候都派发
          probeType: this.probeType,
         //触发上拉事件的阈值, 用于派发 pullingUp 事件
          pullUpLoad: true
        }
      )

      // 2. 监听滚动位置  position位置信息
      this.scroll.on('scroll', position => {
        this.$emit('isBackTopShow', position);
        // console.log(position.x,position.y);
      })

      // 3.监听上拉事件
      // this.scroll.on('pullingUp', () =>{
      //   console.log("上拉事件");
      //   this.scroll.finishPullUp();
      // })
    },
    methods: {
      backTop(x, y, time = 300){
        this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>
