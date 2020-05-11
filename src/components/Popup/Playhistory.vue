<template>
  <div id="playhistory">
    <div class="top">
      <div class="total">列表总数:({{length}}首)</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#playhistory {
  color: black;
  .top{
      padding: 10px;
      text-align: left;
  }
}

</style>