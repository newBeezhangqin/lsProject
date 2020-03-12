<template>
  <div id="sliderBar">
    <ul>
      <li
        @click="choiceNum(index)"
        v-for="(value,index) in nameHos"
        :key="index"
        :class=" num == index ? 'hhh' : ''"
      >{{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "hosSilder", //侧边的导航栏
  data() {
    return {
      nameHos: [],
      num: 0
    };
  },
  props: {
    hosCode: {
      type: Object,
      default: {}
    }
  },
  mounted() {},
  methods: {
    handlehosCode() {
      var hosCode = this.hosCode;
      console.log(hosCode, 123);
      for (var key in hosCode) {
        this.nameHos.push(key);
      }
    },
    choiceNum(index) {
      this.num = index;
      this.$emit("sendNum", index);
    }
  },
  watch: {
    hosCode: {
      handler() {
        this.handlehosCode();
      }
    },
    num: {
      handler() {}
    }
  }
};
</script>
<style scoped>
#sliderBar ul li.hhh {
  color: rgba(51, 119, 254, 1);
}
#sliderBar ul {
  margin: 1vh 0 0 0;
}
#sliderBar ul li {
  background: rgba(20, 26, 52, 1);
  height: 6.48vh;
  color: #888888;
  font: 2vh/6.8vh "";
  background: url(../../assets/img/arrow_b.png) no-repeat 13.4vw;
}
</style>