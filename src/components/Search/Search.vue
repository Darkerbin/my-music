<template>
  <div id="search">
    <div class="red">
      <navigation :title="title" />
    </div>

    <form>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch(value)"
        @cancel="onCancel"
      />
    </form>
    <div class="warp">
      <van-row type="flex" justify="space-between" v-for="(item,index) in hotsearch" :key="index">
        <van-col span="4">{{index+1}}</van-col>
        <van-col span="16">
          <router-link :to="'/search/'+item.searchWord">
            <div class="searchWord">{{item.searchWord}}</div>
            <div class="content">{{item.content}}</div>
          </router-link>
        </van-col>
        <van-col span="4">
          <img v-lazy="item.iconUrl" alt class="iconurl" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import navigation from "../Common/Navigation";
export default {
  name: "search",
  components: {
    navigation
  },
  data() {
    return {
      title: "热门搜索",
      value: "",
      hotsearch: []
    };
  },
  methods: {
    // 默认搜索
    getdefault() {
      this.$axios.get("/search/default").then(res => {
        this.value = res.data.data.showKeyword;
      });
    },
    gethotsearch() {
      this.$axios.get("/search/hot/detail").then(res => {
        this.hotsearch = res.data.data;
      });
    },
    // 搜索
    onSearch(keyword) {
      this.$router.push({ path: "/search/" + keyword });
    },
    // 清除
    onCancel() {
      this.$router.push({ path: "/sheet" });
    }
  },
  created() {
    this.gethotsearch();
    this.getdefault();
  }
};
</script>

<style lang="scss" scoped>
.red {
  border-bottom: 2px solid red;
}
.van-row--flex {
  margin-top: 1rem;
  text-align: center;
  background: linear-gradient(45deg, rgb(138, 193, 209), #fff);
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-col {
  color: rgb(146, 110, 110);
  font-size: 0.8rem;
}
.van-col .searchWord {
  font-size: 0.8rem;
  font-weight: 300;
  color: red;
}
.iconurl {
  width: 1.5rem;
}
</style>