<template>
  <div id="hotsong">
    <h3>推荐歌曲</h3>
    <transition-group
      enter-active-class="animated rotateInUpLeft"
      leave-active-class="animated rotateInDownRight"
      tag="div"
    >
      <div class="wrap" v-for="(item,index) in songs" :key="index">
        <div class="index">{{index+1}}</div>
        <div class="song" @click="play(item.id,songs)">
          <div class="name">{{item.name}}</div>
          <div class="singer">{{item.ar[0].name}}--{{item.al.name}}</div>
        </div>
        <div class="meun">
          <!-- <router-link :to="'/songdetail/'+item.id"> -->
          <van-icon name="ellipsis" class="ellipsis" />
          <!-- </router-link> -->
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "hotsong",
  data() {
    return {
      songs: []
    };
  },
  props: ["gid"],
  methods: {
    getsongs(id) {
      this.$axios.get("/artists?id=" + id).then(res => {
        this.songs = res.data.hotSongs;
      });
    }
  },
  created() {
    this.getsongs(this.gid);
  }
};
</script>

<style lang="scss" scoped>
#hotsong {
  margin: 1rem;
  .wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 4rem;
    border-radius: 5px;
    border-bottom: 2px solid #ccc;
    .index {
      color: black;
      font-size: 1rem;
    }
    .song {
      width: 8rem;
      text-align: center;
      margin-left: 1rem;
      .name {
        font-size: 0.6rem;
        font-weight: 400;
      }
      .singer {
        font-size: 0.1rem;
        color: rgb(146, 142, 142);
      }
    }
  }
  .wrap:hover {
      background: linear-gradient(45deg, #f40, skyblue);
    }
}
</style>