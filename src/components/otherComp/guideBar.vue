<template>
  <div class="guidebar" @mouseleave="showGuide">
    <div class="smallPlace" @mouseenter="showGuide" v-show="!showsilder"></div>
    <div class="bigPlace" v-show="showsilder">
      <ul>
        <li @click="goOther('outpatient')">门诊数据</li>
        <li @click="goOther('epidemic')">疫情分析</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "guideBar",
  data() {
    return {
      showsilder: false
    };
  },
  methods: {
    showGuide() {
      this.showsilder = !this.showsilder;
    },
    goOther(params) {
      this.$router.push(params);
    }
  }
};
</script>
<style scoped>
.guidebar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  display: flex;
}
.smallPlace {
  width: 1vw;
  height: 100vh;
}
.bigPlace {
  width: 7.8vw;
  height: 100vh;
  text-align: center;
  background: rgba(14, 26, 53, 0.9);
  border-image: linear-gradient(
      -90deg,
      rgba(0, 187, 234, 0),
      rgba(3, 77, 129, 1),
      rgba(0, 161, 254, 0)
    )
    1 1;
  box-shadow: 0px 0px 23px 0px rgba(8, 91, 168, 0.4);
  border: 1px solid;
}
.bigPlace ul {
  margin-top: 8.3vh;
}
.bigPlace ul li {
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font: 1vh/3 "";
  cursor: pointer;
}
</style>