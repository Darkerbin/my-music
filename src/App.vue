<template>
  <div id="app">
    <audio class="audio" ref="audio"></audio>

    <keep-alive exclude="detail">
      <router-view v-if="isShow"></router-view>
    </keep-alive>

    <my-footer v-if="showfooter" />
  </div>
</template>

<script>
import myFooter from "./components/Footer";
export default {
  name: "app",
  components: {
    myFooter
  },
  data() {
    return {
      isShow: true,
      showfooter: this.$store.state.showfooter
    };
  }
};
</script>