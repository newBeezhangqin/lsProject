<template>
  <div id="hisTitle">
    <span class="title">{{hosNameArr}}</span>
    <span class="time" @click="chioseTime">{{nowTime}}</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="到"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="center"
      style="position:absolute;top:0;left:0;"
      v-show="dataTemp"
      value-format="yyyy-MM-dd"
    ></el-date-picker>
  </div>
</template>
<script>
export default {
  name: "hisTitle", //医院的标题
  data() {
    return {
      nowTime: "",
      dataTemp: false,
      value1: []
    };
  },
  props: {
    hosNameArr: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.getTime();
  },
  methods: {
    getTime: function() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      _this.nowTime = yy + "年" + mm + "月" + dd + "日";
    },
    chioseTime() {
      console.log("打印下时间");
      this.dataTemp = !this.dataTemp;
    },
    sendData(newdata) {
      this.$emit("sendNewdate", newdata);
    }
  },
  watch: {
    value1: {
      handler() {
        setTimeout(() => {
          this.dataTemp = false;
        }, 1000);
        this.sendData(this.value1);
      }
    }
  }
};
</script>
<style scoped>
#hisTitle {
  height: 3.88vh;
  width: 81vw;
  position: relative;
}
.title {
  font-size: 3.7vh;
  font-family: FZZhunYuan-M02S;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 4.07vh;
  float: left;
}
.time {
  font-size: 1.67vh;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  float: right;
  margin-top: 1.11vh;
  cursor: pointer;
}
</style>