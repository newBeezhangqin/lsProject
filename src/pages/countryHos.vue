<template>
  <div id="cenHis">
    <el-container>
      <el-header style="height:80px;background:#050A24">
        <hosHeader :name="nameCountry" />
      </el-header>
      <el-container>
        <el-aside width="16.25vw">
          <!-- 这里放入的是侧边栏 -->
          <hosSlider :hosCode="hosNameObj" @sendNum="getNum" />
        </el-aside>
        <el-main style="width:82.7vw;">
          <div class="cen">
            <hosTitle :hosNameArr="hosNameArr" @sendNewdate="getNewData" />
            <hosdataShow />
            <!-- 放置组件 占比组件  单线图组件 -->
            <div style="display:flex;marginTop:4.1vh">
              <dragPro :country="country" :width="widthPro" :dragPro="dragPro" :test="testPro" />
              <singleLine
                style="marginLeft:2.23vw"
                :dataTimeSin="dataTimeSin"
                :dataNumberSin="dataNumberSin"
                :intervalSin="intervalSin"
                :maxSin="maxSin"
              />
            </div>
            <doubleLine />
            <!-- 双线图组件 -->
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import hosHeader from "../components/hosComp/hosHeader";
import hosSlider from "../components/hosComp/hosSlider";
import hosTitle from "../components/hosComp/hosTitle";
import hosdataShow from "../components/hosComp/hosdataShow";
import dragPro from "../components/leftComp/dragPro";
import singleLine from "../components/rightComp/singleLine";
import doubleLine from "../components/rightComp/doubleLine";
import { getSingledata, handleData, getMonth } from "../network/request.js"; // 引入請求的函數
import { numTime, monthTime, changeTime } from "../network/time.js";
import { delCountry } from "../network/handleIfo.js";
export default {
  name: "countryHos",
  data() {
    return {
      type: "人民医院",
      title: "药占比",
      i: 0,
      nameCountry: this.$route.query.nameCountry,
      hosNameObj: {},
      hosNameArr: "",
      hosCodeArr: [],
      hosCode: "",
      nameArr: [],
      time1: 200,
      country: 0,
      widthPro: 27.4,
      heightPro: 30,
      dragPro: [1, 2, 3],
      dataTimeSin: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], //时间的数量
      dataNumberSin: [
        123123,
        123123,
        12312312,
        343,
        343434,
        3434343,
        34343445,
        45454,
        454545,
        4545,
        12312,
        12312
      ],
      intervalSin: 200000,
      maxSin: 1200000,
      testPro: "test"
    };
  },
  components: {
    hosHeader,
    hosSlider,
    hosTitle,
    hosdataShow,
    dragPro,
    doubleLine,
    singleLine
  },
  mounted() {
    this.test();
    this.changeHosName();
    this.getHosData();
  },
  methods: {
    // 处理数据  标题进行操作
    getHosData() {
      getSingledata({
        url: "/api",
        params: {
          StateTime: numTime(this.time1),
          EndTime: numTime(this.time1),
          HospCode: this.hosCode
        }
      }).then(res => {
        console.log(res.data.data[0].data, "这个是个测试接口");
      });
    },
    test() {
      var name = this.nameCountry;
      this.hosNameObj = delCountry(name);
      for (var key in this.hosNameObj) {
        this.nameArr.push(key);
        this.hosCodeArr.push(this.hosNameObj[key]);
      }
    },
    getNum(num) {
      this.i = num;
    },
    //处理定义的i 进行 数据的渲染
    changeHosName() {
      this.hosNameArr = this.nameArr[this.i];
      this.hosCode = this.hosCodeArr[this.i];
    },
    getNewData(newdata) {
      console.log(newdata, "这是newdata");
    }
  },
  watch: {
    i: {
      handler() {
        this.changeHosName();
        this.getHosData();
      }
    }
  }
};
</script>

<style>
.el-header {
  background: #050a24;
  height: 7.4vh;
  margin: 0;
  padding: 0;
  margin: 0 auto;
}
.el-aside {
  background-color: #0e1a35;
  color: #333;
  text-indent: 2.18vw;
  line-height: 10.41vw;
  height: 110vh;
}
.el-main {
  background-color: #050a24;
  color: #333;
  padding: 0;
  margin: 0;
}
.cen {
  height: 108vh;
  background: #101b2e;
  padding-left: 1.71vw;
  padding-top: 2.03vh;
}
</style>