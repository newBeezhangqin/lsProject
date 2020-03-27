<template>
  <div id="hisTitle">
    <span class="title">{{hosNameArr}}</span>
    <span class="time" @click="chioseTime">{{nowData}}</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="到"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="center"
      style="position:absolute;bottom:-3vh;right:0;"
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
      nowData: "",
      dataTemp: false,
      value1: []
    };
  },
  props: {
    hosNameArr: {
      type: String,
      default: ""
    },
    Days: {
      type: Number,
      default: 3
    }
  },
  mounted() {
    this.getTime();
  },
  methods: {
    getTime: function() {
      var _this = this;
      var day1 = new Date();
      day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000 * _this.Days);
      function conver(s) {
        return s < 10 ? "0" + s : s;
      }
      day1.getFullYear() +
        "-" +
        conver(day1.getMonth() + 1) +
        "-" +
        conver(day1.getDate());
      _this.nowData =
        day1.getFullYear() +
        "年" +
        conver(day1.getMonth() + 1) +
        "月" +
        conver(day1.getDate()) +
        "日";
    },
    chioseTime() {
      this.dataTemp = !this.dataTemp;
    },
    sendData(newdata) {
      this.$emit("sendNewdate", newdata);
    }
  },
  watch: {
    value1: {
      handler(newdata, olddata) {
        console.log("这是日历的条件");
        this.sendData(newdata);

        setTimeout(() => {
          this.dataTemp = false;
        }, 1000);
        function conver(s) {
          return s < 10 ? "0" + s : s;
        }
        var date1 = new Date(this.value1[0]);
        var date2 = new Date(this.value1[1]);

        if (this.value1[0] == this.value1[1]) {
          this.nowData =
            date1.getFullYear() +
            "年" +
            conver(date1.getMonth() + 1) +
            "月" +
            conver(date1.getDate() + 1) +
            "日"; //需要加一解决
          //   console.log(this.nowData);
        } else {
          var time1 =
            date1.getFullYear() +
            "年" +
            conver(date1.getMonth() + 1) +
            "月" +
            conver(date1.getDate()) +
            "日";
          var time2 =
            date2.getFullYear() +
            "年" +
            conver(date2.getMonth() + 1) +
            "月" +
            conver(date2.getDate()) +
            "日";
          this.nowData = time1 + " " + "至" + " " + time2;
        }
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