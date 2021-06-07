<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(msg, time = 2000) {
        this.message = msg;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, time)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, .75);
    z-index: 10;
  }
</style>
