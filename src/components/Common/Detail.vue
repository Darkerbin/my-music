<template>
  <div id="detail">
    <div class="loading" v-show="isloading">
      <van-loading type="spinner" color="#1989fa" />
      <div class="jiazai">加载中</div>
    </div>
    <div class="show" v-show="isshow">
      <van-nav-bar left-arrow :left-text="title" @click-left="onClickLeft" />
      <!-- 图片描述 -->
      <div class="gedan">
        <img v-lazy="details.coverImgUrl" alt />
      </div>
      <div class="description">{{details.name}}</div>
      <div class="playcount">
        <van-icon name="service-o" />
        播放量：{{details.playCount | counts}} 万
      </div>
      <!-- 歌曲 -->
      <div class="song">
        <van-row type="flex" justify="space-between">
          <van-col span="18">
            <div class="play">
              <span>播放全部</span>
              <span>(共{{details.trackCount}}首)</span>
            </div>
          </van-col>
          <van-col span="6"></van-col>
        </van-row>
        <transition-group
          enter-active-class="animated rubberBand"
          leave-active-class="animated rotateIn"
        >
          <div class="list" v-for="(item,index) in song" :key="index">
            <div class="id">{{index+1}}</div>

            <div class="dansong" @click="play(item.id,song)">
              <div class="name">{{item.name}}</div>
              <div class="songer">{{item.ar[0].name}}--{{item.al.name}}</div>
            </div>
            <div class="meun">
              <router-link :to="'/songdetail/'+item.id">
                <van-icon name="ellipsis" class="ellipsis" />
              </router-link>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      details: [],
      song: [],
      isshow: false,
      isloading: true
    };
  },
  props: ["title"],
  inject: ["iffooter", "playaudio"],
  filters: {
    counts(value) {
      return Math.floor(value / 10000);
    }
  },
  methods: {
    // 歌单详情
    getdetails(id) {
      this.$axios.get("/playlist/detail?id=" + id).then(res => {
        this.details = res.data.playlist;
        this.song = res.data.playlist.tracks;
      });
    },
    // 音乐url
    getsongurl(id) {
      this.$axios.get("/song/url?id=" + id).then(res => {
        console.log(res)
        this.$store.state.src = res.data.data[0].url;
      });
    },
    // 点击音乐
    play(id,song) {
      // 获取音乐url
      this.getsongurl(id);
      // 播放音乐
      this.playaudio(id,song);
    },
    onload() {
      if (this.details == "") {
        return;
      } else {
        this.isshow = true;
        this.isloading = false;
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created() {
    this.getdetails(this.$route.params.id);
    if (this.details == "") {
      this.isshow = true;
      this.isloading = false;
    } else {
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  font-size: 2rem;
  text-align: center;
  color: red;
  .jiazai {
    font-size: 1.4rem;
  }
}
/* 返回头部 */
.van-hairline--bottom {
  background: none;
}
/* 返回头部 */
.gedan {
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
.playcount {
  color: #fff;
  font-size: 0.8rem;
  i {
    color: #fff;
    font-size: 0.8rem;
  }
}
.description {
  width: 100%;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-top: -4rem;
}
/* 歌曲 */
.song {
  width: 100%;
  margin-top: 6px;
  background: #ffffff;
  border-radius: 1rem;
  opacity: 0.9;
  .play {
    font-size: 1rem;
    text-indent: 1rem;
    margin-top: 1rem;
    color: #000;
    font-weight: 700;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    span {
      color: #000;
    }
  }
  .list:hover {
    background: linear-gradient(45deg, #f40, skyblue);
  }
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    border-radius: 5px;
    border-bottom: 2px solid #ccc;
    .id {
      flex: 1;
      font-size: 0.6rem;
      color: #000;
      margin-left: 1rem;
    }
    .dansong {
      font-size: 0.1rem;
      flex: 6;
      .name {
        font-size: 0.8rem;
        font-weight: 700;
        color: #000;
      }
      .songer {
        color: #555;
        opacity: 0.8;
        margin-top: 0.4rem;
      }
    }
    .meun {
      width: 3rem;
      height: 3rem;
      .ellipsis {
        margin-left: 1rem;
        font-size: 1.2rem;
      }
    }
  }
}
</style>