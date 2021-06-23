<template>
  <div class="profile">
    <nav-bar class="nav-bar-profile">
      <div slot="center">我的</div>
    </nav-bar>
    <mine-head/>
    <mine-info-list :profile-data="profileData"/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  import MineHead from './childrenViews/MineHead'
  import MineInfoList from './childrenViews/MineInfoList'

  import {gainProfileData} from '@/network/profile'

  export default {
    name: "Profile",
    components: {
      NavBar,

      MineHead,
      MineInfoList
    },
    data() {
      return {
        profileData: []
      }
    },
    created() {
      this._gainProfileData();
    },
    methods: {
      _gainProfileData() {
        gainProfileData().then(res => {
          this.profileData = res
        })
      }
    }
  }
</script>

<style scoped>
  .profile {
    width: 100%;
    height: calc(100vh - 49px);
    background-color: #f8f8f8;
  }
  .nav-bar-profile {
    background-color: var(--color-tint);
    color: white;
  }
</style>
