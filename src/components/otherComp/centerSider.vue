<template>
  <div id="centerSider">
    <div class="center_cen">
      <div class="center_cen_title" @click="showData">
        <p>{{nowData}}</p>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="到"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="center"
          style="margin-top:1.38vh"
          v-show="dataTemp"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </div>
      <div
        id="main"
        style=" width: 34.2vw;height: 62.9vh;margin-top:3.8vh;margin-left:1vw"
        class="echart"
      ></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import { getOption, getBigoption } from "../../network/echartsOption";
import { getSingledata } from "../../network/request";
export default {
  name: "centerSider",
  props: {
    nameCountry: {
      type: String,
      default: ""
    },
    Days: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      mapMsg: "",
      tempMap: false,
      nowData: "2020年12月24号",
      value1: "", //为一个数组
      value2: "",
      dataTemp: false
    };
  },
  mounted() {
    this.checkCountry();
    this.getTime(); // 时间函数
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
  },
  methods: {
    //获取传入的选择的日期的函数
    sendData(newdata) {
      this.$emit("sendNewdate", newdata);
    },
    showData() {
      this.dataTemp = true;
    },
    checkCountry() {
      if (this.nameCountry) {
        this.drawCountry();
      } else {
        this.drawProvince(); //有nameCountry的时候 运行画地图的函数
      }
    },
    //获取时间的函数
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
    //县级函数的渲染
    drawCountry() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      var that = this;
      axios(`./${this.nameCountry}.json`).then(res => {
        this.$echarts.registerMap(this.nameCountry, res.data, {}); //注册地图
        var option = getOption(this.nameCountry);
        myChart.setOption(option, true);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
        // 跳转到新医院的地址上
        myChart.on("click", function() {
          that.$router.push({
            path: "/countryhos",
            query: {
              nameCountry: that.nameCountry,
              countryCode: that.$route.query.code
            }
          });
        });
      });
    },
    //画的省份的地图函数
    drawProvince() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      axios.get(`./lishui.json`).then(res => {
        this.$echarts.registerMap("lishui", res.data, {}); //注册地图 西城区的地图
        var option = getBigoption();
        myChart.setOption(option, true); //塞进去
        window.addEventListener("resize", function() {
          myChart.resize();
        });
        var that = this; //改变this的指向 只有在vue实例上面拿到$echarts
        myChart.on("click", function(a) {
          //点击时间触发
          myChart.clear();
          console.log(a.name);
          if (a.name) {
            //   console.log('实现跳转')
            var countryCode = "";
            switch (a.name) {
              case "莲都区":
                countryCode = "331102";
                break;
              case "青田县":
                countryCode = "331121";
                break;
              case "缙云县":
                countryCode = "331122";
                break;
              case "遂昌县":
                countryCode = "331123";
                break;
              case "松阳县":
                countryCode = "331124";
                break;
              case "云和县":
                countryCode = "331125";
                break;
              case "庆元县":
                countryCode = "331126";
                break;
              case "景宁畲族自治县":
                countryCode = "331127";
                break;
              case "龙泉市":
                countryCode = "331181";
                break;
            }
            that.$router.push({
              path: "/diveCountry",
              query: {
                name: a.name,
                code: countryCode
              }
            });
          }
        });
      });
    }
  } //函数结束
};
</script>

<style scoped>
#centerSider {
  width: 36.3vw;
  height: 73.1vh;
}
.center_cen .center_cen_title {
  width: 20.8vw;
  height: 4.1vh;
  background: url(../../assets/img/外框3@2x.png) no-repeat center;
  background-size: contain;
  text-align: center;
  margin-left: 7.5vw;
  position: relative;
  cursor: pointer;
}
.center_cen .center_cen_title p {
  font: 1.1vh/4.1vh "";
  color: #fff;
  /* margin-top: .9vh; */
}
</style>