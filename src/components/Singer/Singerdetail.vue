<template>
  <div id="songerdetail">
    <div class="loading" v-show="isloading">
      <van-loading type="spinner" color="#1989fa" />
      <div class="jiazai">加载中</div>
    </div>
    <div class="show" v-show="isshow">
      <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" />
      <!-- 图片描述 -->
      <div class="gedan">
        <img v-lazy="details.img1v1Url" alt />
      </div>
      <div class="title">{{details.name}}</div>
      <div class="wrap">
        <van-tabs animated swipeable>
          <van-tab title="主页">
            <resolve />
          </van-tab>
          <van-tab title="歌曲">
            <hotsong :gid="gid" />
          </van-tab>
          <van-tab title="专辑">
            <album :gid="gid" />
          </van-tab>
          <van-tab title="视频">
            <mv :gid="gid" />
          </van-tab>
          <van-tab title="个人信息">
            <personaldetail :gid="gid" />
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import personaldetail from "./Singerdetail/Personaldetail";
import hotsong from "./Singerdetail/Hotsong";
import album from "./Singerdetail/Album";
import mv from "./Singerdetail/Mv";
import resolve from "./Singerdetail/Resolve";
export default {
  name: "singerdetail",
  components: {
    personaldetail,
    mv,
    album,
    hotsong,
    resolve
  },
  data() {
    return {
      // 歌手的详细信息
      details: [],
      // 歌手id
      gid: "",
      isshow: false,
      isloading: true
    };
  },
  methods: {
    getsonger(id) {
      this.$axios.get("/artists?id=" + id).then(res => {
        this.details = res.data.artist;
        this.gid = res.data.artist.id;
        this.isshow = true;
        this.isloading = false;
      });
    },
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created() {
    this.getsonger(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;
  color: red;
}
.jiazai {
  font-size: 1.2rem;
}
/* 返回头部 */
.van-hairline--bottom {
  background: none;
}
.van-hairline--bottom div,
span {
  color: #ffffff;
  font-size: 1rem;
}
.van-nav-bar__left i {
  color: #fff;
}
.gedan {
  position: absolute;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: -47px;
  img {
    width: 100%;
    height: 15rem;
  }
}
.title {
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  position: absolute;
  top: 193px;
  left: 17px;
}
/* 歌手信息 */
.wrap {
  width: 100%;
  font-size: 1.2rem;
  margin-top: 13rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.van-tabs--line {
  width: 100%;
}
.van-tabs__nav--line {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>