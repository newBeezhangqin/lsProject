<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      title: "药占比",
      msg: "云和县"
    };
  },
  components: {},
  mounted() {
    this.getUrl();
  },
  methods: {
    getUrl() {
      console.log(window.location.pathname, "windowLocaltion");
      switch (window.location.pathname) {
        case "/yunhehos":
          window.localStorage.setItem("tempRetrun", true);
          break;
        case "/outpatient":
          window.localStorage.setItem("tempRetrun", false);
          break;
      }
    },
    checkPath(path) {
      // console.log('路由检测开始了')
      // console.log(path,'path');
      this.getUrl();
    }
  },
  watch: {
    $route: {
      handler(current) {
        this.checkPath(current.path);
      }
    }
  }
};
</script>
<style scoped>
.el-header {
  background: #050a24;
  line-height: 60px;
  margin: 0;
  padding: 0;
  margin: 0 auto;
}
.el-aside {
  background-color: #0e1a35;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 1184px;
}
.el-main {
  background-color: #050a24;
  color: #333;
  padding: 0;
  margin: 0;
}
.cen {
  width: 1589px;
  height: 1158px;
  background: #101b2e;
  padding-left: 33px;
  padding-top: 22px;
}
</style>
