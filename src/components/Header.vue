<template>
  <div class="myHeader">
    <div class="flex">
      <div class="icon">
        <van-cell>
          <van-icon name="wap-nav" />
        </van-cell>
        <van-popup v-model="show" round position="left" :style="{ width: '70%',height:'100%'}">
          <sidebar />
        </van-popup>
      </div>
      <div class="headtitle">VUE-MUSIC</div>
      <div class="icon">
        <router-link to="/search">
          <van-icon name="search" />
        </router-link>
      </div>
    </div>
    <div class="wrap">
      <van-row>
        <router-link to="/sheet" tag="div">
          <van-col>推荐</van-col>
        </router-link>
        <router-link to="/ranking" tag="div">
          <van-col>排行榜</van-col>
        </router-link>
        <router-link to="/singer" tag="div">
          <van-col>歌手</van-col>
        </router-link>
      </van-row>
    </div>
    <div class="cover">
      <keep-alive exclude="rankdetail, songdetail">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(210, 69, 55);
  .icon .van-cell {
    background: rgb(210, 69, 55);
  }
  .icon i {
    font-size: 2rem;
    cursor: pointer;
  }
  .headtitle {
    font-weight: 600;
    color: #ffffff;
  }
}
.wrap {
  width: 100%;
  background: rgb(210, 69, 55);
  font-size: 0.8rem;
  height: 2rem;
  .van-row {
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #ffffff;
    text-align: center;
    div {
      margin-left: 1.5rem;
    }
  }
}
.cover {
  height: 100vh;
  width: 100%;
}
</style>