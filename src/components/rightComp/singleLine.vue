<template>
  <div id="rightSider" :style="{marginTop:margin+'vh'}">
    <div class="center_right" :class="one">
      <div class="center_right_title">
        <p>{{titlesin}}</p>
      </div>
      <div id="xxt" :style="{width:width+'vw',height:height+'vh',marginTop:'1vh'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "singleLine", //单线的图  //记得修改样式哈
  props: {
    width: {
      type: String,
      default: "20.2"
    },
    height: {
      type: String,
      default: "28.8"
    },
    one: {
      type: String,
      default: "one"
    },
    margin: {
      type: String,
      default: "0"
    },
    titlesin: {
      type: String,
      default: "2019年门诊次数汇总"
    },
    dataTime: {
      type: Array,
      default: () => [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30
      ]
    },
    dataNumber: {
      type: Array,
      default: () => []
    },
    maxSin: {
      type: Number,
      default: 1200000
    },
    intervalSin: {
      type: Number,
      default: 200000
    }
  },
  mounted() {
    this.firShow();
  },

  computed: {
    sum: function() {
      return [this.dataTime, this.dataNumber, this.intervalSin, this.maxSin]; //监听 四个
    }
  },
  watch: {
    sum: {
      handler() {
        this.firShow();
      }
    },
    dataNumber: {
      handler() {
        this.firShow();
      }
    }
  },
  methods: {
    firShow() {
      var myChart = this.$echarts.init(document.getElementById("xxt"));
      // console.log(myFirEchar);

      var charts = {
        unit: "(人次)",
        name: [" "],
        // lineX: ['1','3','5','7','9','11','13','15','17','19','21','23','25','27','29','31'],
        lineX: this.dataTime
      };
      var color = ["rgba(23, 255, 243"];
      // var lineY = ["5000", "10000", "15000", "20000", "25000", "30000"];
      var lineY = [];
      var data = {
        // name: '当月就医的人数',  去除上面的点点
        type: "line",
        color: "#2eb36c", //线的颜色
        smooth: true,
        areaStyle: {
          normal: {
            color: new this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0,201,87,0.7)" //渐变从0 开始的颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(0,201,87,0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 10
          }
        },
        symbol: "circle",
        symbolSize: 5,
        // data: [
        //   7000,
        //   8000,
        //   9000,
        //   10000,
        //   11455,
        //   13000,
        //   15464,
        //   16000,
        //   17000,
        //   16000,
        //   15000,
        //   14000,
        //   15000,
        //   16000,
        //   17000,
        //   18000,
        //   19000
        // ]
        data: this.dataNumber
      };
      lineY.push(data);
      var option = {
        backgroundColor: "rgba(12,116,214,0.1)", //背景颜色 奥利给
        tooltip: {
          trigger: "axis" //是否加入跟线 提升数据展示的结构
        },
        grid: {
          //控制大小的东西
          top: "18%",
          left: "4%",
          right: "4%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: {
          //直角坐标系的X轴
          type: "category",
          boundaryGap: false,
          data: charts.lineX,
          axisLabel: {
            textStyle: {
              color: "#03B0D8"
            },
            splitLine: {
              lineStyle: {
                color: "#0E3254"
              }
            },
            interval: 0, //横轴信息全部显示
            rotate: 30 //度角倾斜显示
          }
        },
        yAxis: {
          //直角坐标系的y轴
          name: charts.unit,
          type: "value",
          // data:charts.lineY,
          nameTextStyle: {
            color: "#03B0D8",
            align: "right"
          },
          // nameLocaltion:'end',
          nameGap: 20,
          min: 0,
          max: this.maxSin,
          interval: this.intervalSin,
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              color: "#03B0D8"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#0E3254"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#152E46"
            }
          }
        },
        series: lineY
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
      setInterval(() => {
        myChart.setOption({
          legend: {
            selected: {
              show: false
            }
          }
        });
        myChart.setOption({
          legend: {
            selected: {
              show: true
            }
          }
        });
      }, 10000);
    }
  }
};
</script>
<style scoped>
/* .center_right_title {
  overflow: hidden;
  width: 20.8vw;
  height: 4.2vh;
  background: url(../../assets/img/外框2@2x.png) no-repeat center;
  background-size: cover;
} */
.center_right_title {
  overflow: hidden;
  width: 20.8vw;
  height: 4.3vh;
  /* background:linear-gradient(90deg,rgba(2,89,130,0.29) 0%,rgba(3,96,140,0) 100%); */
  background: url(../../assets/img/外框2@2x.png) no-repeat center;
  background-size: cover;
}
.center_right_title p {
  /* width:96px;
    height:16px; */
  font-size: 1rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
  margin: 1.1vh 0 0 0;
}
.one {
  margin-top: 0px;
}
.two {
  margin-top: 21px;
  margin-left: 49px;
}
.center_right_title.one {
  margin-top: 20px;
}
.center_right_title p {
  margin-top: 1vh;
  font-size: 1rem;
  font-family: PingFang SC;
  font-weight: 400;
  text-indent: 1.14vw;
  color: rgba(0, 204, 255, 1);
}
</style>