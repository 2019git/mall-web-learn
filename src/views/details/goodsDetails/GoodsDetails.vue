<template>
  <div>
    商品详情:{{goodsId}}
  </div>
</template>

<script>
  export default {
    name: "GoodsDetails",
    data(){
      return {
        goodsId: null
      }
    },
    created() {
      this.goodsId = this.$route.params.id
    }
  }
</script>

<style scoped>

</style>
