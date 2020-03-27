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
            <hosTitle :hosNameArr="hosNameArr" @sendNewdate="getNewData" :Days="time1" />
            <hosdataShow :dataYesShow="dataYesShow" :dataShow="dataShow" />
            <!-- 放置组件 占比组件  单线图组件 -->
            <div style="display:flex;marginTop:4.1vh">
              <dragPro :country="country" :width="widthPro" :dragPro="dragPro" :test="testPro" />
              <singleLine
                style="marginLeft:2.23vw"
                :dataTimeSin="dataTimeSin"
                :dataNumber="dataNumberSin"
                :intervalSin="400"
                :maxSin="2000"
                margin="1.8"
                titlesin="当月门诊次数"
                width="51.4"
                height="30"
              />
            </div>
            <doubleLine
              :width="81.1"
              :height="30"
              :nameRes="nameRes"
              :linex="linex"
              :dataNumberSin="dataDousin"
              :maxDou="300000"
              :intervalDou="30000"
              :dataNumberDou="dataDoudou"
              style="marginTop:1.82vh"
            />
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
import dragPro from "../components/hosComp/hosdragPro";
import singleLine from "../components/rightComp/singleLine";
import doubleLine from "../components/rightComp/doubleLine";
import {
  getSingledata,
  handleData,
  getMonth,
  getDetail
} from "../network/request.js"; // 引入請求的函數
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
      dateArr: [],
      time1: 200,
      time2: 200,
      nowDate: "",
      country: 0,
      widthPro: 27.4,
      heightPro: 30,
      dragPro: [],
      dataTimeSin: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], //时间的数量
      dataNumberSin: [],
      nameRes: ["上个月", "这个月"],
      testPro: "test",
      dataYesShow: [],
      dataDousin: [],
      dataDoudou: [],
      dataShow: [],
      linex: [
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
          EndTime: numTime(this.time2),
          HospCode: this.hosCode
        }
      }).then(res => {
        // 请求的当现在的数据 进行处理
        console.log(res.data.data[0].data, "这个是个测试接口");
        var hhh = handleData(res.data.data[0].data, [5, 6, 0, 2, 4]);
        var dragMoney = (hhh[1].门诊收费金额 / hhh[0].药占比).toFixed(2); //药品收费金额
        var dragPro = hhh[0].药占比.toFixed(2) + "%"; //药占比
        var outPatMoney = hhh[1].门诊收费金额.toFixed(2);
        this.dragPro = [outPatMoney, dragMoney, dragPro];
        var numPatient = hhh[2].门诊人次;
        var tolPrescription = hhh[3].处方总数;
        var electronicPatient = hhh[4].门诊电子病历;
        this.dataShow = [
          numPatient,
          tolPrescription,
          electronicPatient,
          dragMoney
        ];
        console.log(this.dataShow);
      });
      getSingledata({
        url: "/api",
        params: {
          StateTime: monthTime(this.time1)[0],
          EndTime: monthTime(this.time1)[1],
          HospCode: this.hosCode
        }
      }).then(res => {
        // 请求上个月的数据 并处理
        console.log(res.data.data[0].data, "这个是个上个月的数据");
        var hhh = handleData(res.data.data[0].data, [0, 2, 4, 6]);
        var numPatient = hhh[0].门诊人次;
        var tolPrescription = hhh[1].处方总数;
        var electronicPatient = hhh[2].门诊电子病历;
        var outPatMoney = hhh[3].门诊收费金额.toFixed(2);
        this.dataYesShow = [
          numPatient,
          tolPrescription,
          electronicPatient,
          outPatMoney
        ];
      });
      getDetail(this.time1, this.hosCode).then(res => {
        console.log(res[0], "最终的测试");
        this.dataNumberSin = res[0];
        this.dataDousin = res[1];
        console.log(this.dataNumberSin, "传入的数据");
      });
      var timelast = this.time1 + 30;
      getDetail(timelast, this.hosCode).then(res => {
        this.dataDoudou = res[1];
      });
    },

    test() {
      // 将对象中医院的名字遍历出来放入到数组里面
      var name = this.nameCountry;
      this.hosNameObj = delCountry(name);
      for (var key in this.hosNameObj) {
        this.nameArr.push(key);
        this.hosCodeArr.push(this.hosNameObj[key]);
      }
    },
    getNum(num) {
      // 侧边栏的点击的时候返回i 改变请求的医院的数据
      this.i = num;
    },
    changeHosName() {
      //处理定义的i 进行 数据的渲染
      this.hosNameArr = this.nameArr[this.i];

      this.hosCode = this.hosCodeArr[this.i];
    },
    getNewData(newdata) {
      // 处理newdata 改变时间1和时间2
      var hhh = changeTime(newdata);
      this.nowDate = newdata[0];
      this.time2 = hhh[1];
      this.time1 = hhh[0];
    }
  },
  watch: {
    i: {
      handler() {
        this.changeHosName();
        this.getHosData();
      }
    },
    time1: {
      handler() {
        console.log("time1发生改变了");
        this.changeHosName();
        this.getHosData();
      }
    }
  },
  computed: {
    updataDate: function() {
      return [this.time1];
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