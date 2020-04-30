<template>
  <div id="app">
    <audio class="audio" ref="audio"></audio>
    <router-view v-if="isShow"></router-view>
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
      showfooter: true
    };
  }
};
</script>