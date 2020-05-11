<template>
  <div id="myfooter">
    <div class="wrap">
      <div class="image">
        <img ref="img" src="../assets/error.jpg" alt />
      </div>
      <div class="geming" ref="name">songName</div>
      <div class="playicon">
        <i class="iconfont" id="playicon">&#xe612;</i>
      </div>
      <div class="liebiao">
        <i class="iconfont" @click="showPopup">&#xe609;</i>
        <van-popup v-model="show" round position="bottom" :style="{ height: '50%' }">
          <playhistory v-if="isshow" />
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import playhistory from "./Popup/Playhistory";
export default {
  name: "myFooter",
  components: {
    playhistory
  },
  data() {
    return {
      show: false,
      // 列表组件
      isshow: true
    };
  },
  methods: {
    // 弹出层
    showPopup() {
      this.show = true;
    },
  }
};
</script>

<style lang="scss">
#myfooter {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background: rgb(210, 69, 55);
  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: #ffffff;
    i {
      font-size: 2rem;
      color: #ffffff;
    }
    .image img {
      width: 3.4rem;
      height: 3.4rem;
      border-radius: 50%;
      animation: change 2s infinite linear;
    }
    @keyframes change {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    /* 开始播放icon */
    .palyicon {
      font-size: 2rem;
    }
  }
}
</style>