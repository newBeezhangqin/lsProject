<template>
  <div class="header">
    <div class="h_left">
      <p>{{name}}医院门诊数据监控</p>
    </div>
    <div class="h_right">
      <span @click="backRoute">返回上一级</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["name"], //医院名字啦
  methods: {
    backRoute() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.header {
  background: #050a24;
  width: 100vw;
  height: 7.4vh;
}
.h_left {
  float: left;
}
.header .h_left p {
  margin-left: 2vw;
  font: 2.4vh/7.4vh "";
  color: rgba(255, 255, 255, 1);
}
.h_right {
  float: right;
  margin-right: 1vw;
}
.h_right span {
  cursor: pointer;
  font: 1.67vh/7.4vh "";
  color: rgba(255, 255, 255, 1);
}
</style>
