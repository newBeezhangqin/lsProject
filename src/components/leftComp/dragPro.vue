<template>
  <div id="leftSider" :style="{width:width +'vw',marginTop:margin+'vh'}">
    <div class="leftSider_left">
      <div class="leftSider_left_title">
        <p>{{title}}</p>
      </div>
      <div class="leftSider_left_people" :class="one" :style="{height:height+'vh'}">
        <div class="people_top pone">
          <p class="small">门诊收费金额</p>
          <span>{{dragPro[0]}}</span>
        </div>
        <div class="people_top ptwo">
          <p class="small">药品收费金额</p>
          <span>{{dragPro[1]}}</span>
        </div>
        <div class="people_top pthree">
          <p class="small">药占比</p>
          <span>{{dragPro[2]}}</span>
        </div>
        <div class="people_echarts" id="people"></div>
      </div>
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
      default: "药占比"
    },
    width: {
      type: [String, Number],
      default: 21
    },
    height: {
      type: [String, Number],
      default: 29.8
    },
    back: {
      type: String,
      default: "../assets/img/外框@2x.png"
    },
    msg: {
      type: String,
      default: "HHH"
    },
    one: {
      type: String,
      default: "one"
    },
    margin: {
      type: Number,
      default: 0
    },
    dragPro: {
      type: Array,
      default: []
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
  methods: {
    echart() {
      var myChart = this.$echarts.init(document.getElementById("people"));
      var option = {
        title: {
          text: this.dragPro[2],
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#00FFFF",
            fontSize: "20"
          }
        },
        tooltip: {
          formatter: "{b}",
          backgroundColor: "#41bcd3"
        },
        color: ["rgba(176, 212, 251, 1)"],
        series: [
          {
            name: "Line 1",
            type: "pie",
            clockWise: true,
            radius: ["50%", "66%"],

            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: 35385.54,
                name: "门诊",
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: "#00D2FF" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#F0FF00" // 100% 处的颜色
                        }
                      ]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: "药品",
                value: 25487.65,
                itemStyle: {
                  color: "#004A70"
                }
              }
            ]
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
.pone {
  padding-top: 2.7vh;
}
.ptwo {
  padding-top: 28px;
}
.pthree {
  padding-top: 26px;
}
.two {
  /* background: url(../assets/img/外框@2x1.png) no-repeat center; */
  background: linear-gradient(
    -39deg,
    rgba(12, 116, 214, 0.1),
    rgba(19, 50, 121, 0.1)
  );
}
/* .leftSider_left_title {
  margin-top: 1.85vh;
  overflow: hidden;
  width: 20.8vw;
  height: 4.25vh;
  background: url(../../assets/img/外框2@2x.png) no-repeat center;
  background-size: cover;
}
.leftSider_left_title p {
  
  font-size: 1rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0, 204, 255, 1);
  margin: 1.1vh 0 0 1.04vw;
} */
.leftSider_left_title {
  overflow: hidden;
  width: 20.8vw;
  height: 4.25vh;
  /* background:linear-gradient(90deg,rgba(2,89,130,0.29) 0%,rgba(3,96,140,0) 100%); */
  background: url(../../assets/img/外框2@2x.png) no-repeat center;
  background-size: cover;
}
.leftSider_left_title p {
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