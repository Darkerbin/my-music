<template>
  <div id="ranking">
    <div class="content">
      <transition-group
        enter-active-class="animated zoomInRight"
        leave-active-class="animated rotateInDownRight"
        delay-2s
        tag="div"
      >
        <div class="wrap" v-for="(item,index) in rankarr" :key="index">
          <router-link :to="'/ranking/'+item.id">
            <div class="img">
              <img v-lazy="item.coverImgUrl" />
              <span class="frequency">{{item.updateFrequency}}</span>
            </div>
          </router-link>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "ranking",
  data() {
    return {
      rankarr: []
    };
  },
  methods: {
    // 所有榜单内容摘要
    getdetail() {
      this.$axios.get("/toplist/detail").then(res => {
        this.rankarr = res.data.list;
      });
    }
  },
  mounted() {
    this.getdetail();
  }
};
</script>

<style lang="scss" scoped>
#ranking {
  width: 100%;
  height: 100%;
  .content {
    padding: 10px 20px;
    div {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      height: 100%;
      .wrap {
        height: 130px;
        width: 40%;
        margin-bottom: 20px;
        position: relative;
        img {
          height: 100%;
          width: 100%;
        }
        .frequency {
          font-size: 0.8rem;
          position: absolute;
          bottom: 0.6rem;
          color: honeydew;
        }
      }
    }
  }
}
</style>