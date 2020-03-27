<template>
  <div id="leftSider">
    <div class="leftSider_left">
      <div class="leftSider_left_title">
        <p>{{title}}</p>
      </div>
      <div id="people"></div>
    </div>
  </div>
</template>

<script>
export default {
  // 背景颜色的更换 以及
  name: "Proportion", //占比组件 圆环的
  props: {
    //组件化 修改样式
    title: {
      type: String,
      default: "地区发热Top5"
    }
  },
  data() {
    return {
      name: ""
      // dragProLast:dragPro
    };
  },
  watch: {
    dragPro: {
      handler() {
        this.echart();
      }
    }
  },
  mounted() {
    this.echart();
  },
  methods: {
    echart() {
      var myChart = this.$echarts.init(document.getElementById("people"));
      var option = {
        backgroundColor: "rgba(12,116,214,0.1)",
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["缙云县", "遂昌县", "松阳县", "云和县", "龙泉市"],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0, //横轴信息全部显示
              // rotate:30,//度角倾斜显示
              textStyle: {
                color: "#03B0D8"
              }
            },
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: "#0E3254"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#0E3254",
                width: 2 //这里是坐标轴的宽度,可以去掉
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#03B0D8"
              }
            },
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: "#0E3254"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#0E3254",
                width: 3 //这里是坐标轴的宽度,可以去掉
              }
            }
          }
        ],
        series: [
          {
            name: "发热人次数量",
            type: "bar",
            barWidth: "60%",
            data: [121, 78, 65, 62, 32]
          }
        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  }
};
</script>

<style scoped>
.span_left {
  margin-right: 1vw;
}
.people_echarts {
  width: 8.3vw;
  height: 14.8vh;
  position: absolute;
  left: 11.9vw;
  top: 14.8vh;
}

#people {
  width: 20.8vw;

  margin-top: 1vh;
  height: 29vh;
  border-image: radial-gradient(
      circle,
      rgba(13, 54, 78, 0.35),
      rgba(3, 110, 154, 0.35)
    )
    1 1;
  border: 1px solid;
}
.leftSider_left_people .people_top {
  display: flex;
}
.leftSider_left_people .people_top span {
  width: 4.5vw;
  height: 2vh;
  font-size: 2rem;
  font-family: Agency FB;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
}
.leftSider_left_people .people_top p {
  margin-right: 1.3vw;
  margin-top: 1vh;
  width: 5.6vw;
  font-size: 0.9rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(132, 149, 194, 1);
  margin-left: 1.3vw;
}

.leftSider_left .leftSider_left_title {
  overflow: hidden;
  width: 20.8vw;
  height: 4.25vh;
  background: url(../../assets/img/外框2@2x.png) no-repeat center;
  background-size: cover;
}
.leftSider_left .leftSider_left_title p {
  /* width:96px;
    height:16px; */
  font-size: 1rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
  margin: 1.1vh 0 0 1.04vw;
}
.leftSider_left .leftSider_left_title.nannv {
  margin-top: 20px;
}
.one {
  /* background:url(../assets/img/外框@2x.png) no-repeat center; */
  background: linear-gradient(
    -39deg,
    rgba(12, 116, 214, 0.1),
    rgba(19, 50, 121, 0.1)
  );
}
.leftSider_left .leftSider_left_people {
  /* /* width:404px;
    height: 322px; */

  margin-top: 10px;
  position: relative;
}
</style>