<template>
  <div class="tab-bar-item" @click="itemBtnClick" :class="{isDisabled: clickIsDisabled}">
    <div v-if = "!isActive">
      <slot name = "item-icon"></slot>
    </div>
    <div v-else>
      <slot name = "item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name = "item-name"></slot>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type: String,
          default: 'red'
        }
      },
      data() {
        return {
          clickIsDisabled: false
        }
      },
      computed:{
        isActive(){
          // return this.$route.path.indexOf(this.path) !== -1 ? true : false
          return this.$route.path === this.path ? true : false
        },
        activeStyle(){
          return this.isActive ? {color: this.activeColor} : {}
        }
      },
      methods:{
        itemBtnClick(){
          this.clickIsDisabled = true
          if (this.path !== this.$route.path) {
            this.$router.push(this.path)
          }
          setTimeout(() => {
            this.clickIsDisabled = false
          }, 2000)
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .isDisabled {
    /* 禁止点击事件 */
    pointer-events: none;
  }
</style>
