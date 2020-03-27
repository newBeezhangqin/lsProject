<template>
  <div id="outCity">
    <Header>
      <slot>返回上一级</slot>
    </Header>
    <el-row type="flex" style="background:#061123;margin:0;padding:0">
      <el-col style="width:25vw">
        <dataLogo :dataTitle="dataTitle" />
      </el-col>
      <el-col style="width:75vw;background:#061123;margin:0;padding:0">
        <dataLast :dataShow="dataShow" :dataYesShow="dataYesShow" />
      </el-col>
    </el-row>
    <el-row style="background:#061123;">
      <div class="test">
        <el-col style="width:20.8vw;height:64.8vh;margin-left:1.82vw;">
          <weekContrast
            :totalSum="totalSum"
            :chineseMe="chineseMe"
            :maxRec="maxRec"
            :intervalRec="intervalRec"
          />
          <dragPro :msg="title" :dragPro="dragPro" style="marginTop:1.82vh" />
        </el-col>
        <el-col style="width:36.3vw;height:73.1vh; margin-left:9.6vw;margin-right:9.6vw">
          <centerSider :nameCountry="nameCountry" @sendNewdate="getChoiceData" :Days="time1" />
        </el-col>
        <!-- 右边栏的东西哈 -->
        <el-col style="width:20.8vw;height:73.1vh;overflow:hidden;">
          <singleLine
            :dataTime="dataTimeSin"
            :dataNumber="dataNumberSin"
            :maxSin="maxSin"
            :intervalSin="intervalSin"
          />
          <doubleLine
            :dataNumberSin="dataNumberSin"
            :dataNumberDou="dataNumberDou"
            :maxDou="maxDou"
            :intervalDou="intervalDou"
            style="marginTop:1.82vh"
          />
        </el-col>
      </div>
    </el-row>
  </div>
</template>
<script>
import Header from "../components/otherComp/Header";
import dataLogo from "../components/dataShow/dataLogo";
import dataLast from "../components/dataShow/dataLast";
import dragPro from "../components/leftComp/dragPro";
import weekContrast from "../components/leftComp/weekContrast";
import centerSider from "../components/otherComp/centerSider";
import singleLine from "../components/rightComp/singleLine";
import doubleLine from "../components/rightComp/doubleLine";
import {
  getSingledata,
  request,
  handleData,
  getMonth
} from "../network/request.js"; // 引入請求的函數
import { numTime, monthTime, changeTime } from "../network/time.js";
export default {
  name: "diveCountry",
  components: {
    Header,
    dataLogo,
    dragPro,
    centerSider,
    singleLine,
    weekContrast,
    doubleLine,
    dataLast
  },
  data() {
    return {
      title: "药占比",
      nameCountry: this.$route.query.name,
      nameCode: this.$route.query.code,
      getNewdate: "",
      dataTimeSin: [], //时间的数量
      dataNumberSin: [],
      maxSin: 200000,
      intervalSin: 50000,
      dragPro: [],
      dataTitle: this.$route.query.name + "门诊数据表",
      dataShow: [],
      dataYesShow: [],
      Days: 7,
      dataNumberDou: [],
      maxDou: 200000,
      intervalDou: 50000,
      time1: 200, // 获取的时间1  数字越大 代表的时间开始越早
      time2: 6, // 获取的时间2
      lastMonth: 30, // 自动获取上个月的时间
      totalSum: [],
      chineseMe: [],
      maxRec: 60000,
      intervalRec: 10000
    };
  },
  methods: {
    getCountryData() {
      // 请求动态的数据
      getSingledata({
        //请求的当天的数据
        url: "/api",
        params: {
          StateTime: numTime(this.time1),
          EndTime: numTime(this.time1),
          City: this.nameCode
        }
      }).then(res => {
        console.log(res.data.data[0].data, "测试子页面的时间函数");
        var hhh = handleData(res.data.data[0].data, [5, 6, 0, 2, 4]);
        var dragMoney = (hhh[1].门诊收费金额 / hhh[0].药占比).toFixed(2); //药品收费金额
        var dragPro = hhh[0].药占比.toFixed(2) + "%"; //药占比
        var outPatMoney = hhh[1].门诊收费金额.toFixed(2);
        this.dragPro = [outPatMoney, dragMoney, dragPro];
        var numPatient = hhh[2].门诊人次;
        var tolPrescription = hhh[3].处方总数;
        var electronicPatient = hhh[4].门诊电子病历;

        // 门诊人数 ， 处方总数 ， 门诊电子病历 ，门诊收费金额
        this.dataShow = [
          numPatient,
          tolPrescription,
          electronicPatient,
          dragMoney
        ];
      });
      getSingledata({
        //请求上个月的数据
        url: "/api",
        params: {
          StateTime: monthTime(this.time1)[0],
          EndTime: monthTime(this.time1)[1],
          City: this.nameCode
        }
      }).then(res => {
        //  0 门诊人次 1 当年的门诊人次 2 处方总数 3 中医处方 4 门诊电子病历 5 药占比 6 门诊收费金额
        var hhh = handleData(res.data.data[0].data, [0, 2, 4, 6]);
        console.log(hhh, "上个月的数据总数");
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
      getMonth(this.time1, this.nameCode).then(res => {
        var tolPrescription0 = handleData(res[0], [2])[0].处方总数;
        var tolPrescription1 = handleData(res[1], [2])[0].处方总数;
        var tolPrescription2 = handleData(res[2], [2])[0].处方总数;
        var tolPrescription3 = handleData(res[3], [2])[0].处方总数;
        var traditionalPrescription0 = handleData(res[0], [3])[0].中医处方数量;
        var traditionalPrescription1 = handleData(res[1], [3])[0].中医处方数量;
        var traditionalPrescription2 = handleData(res[2], [3])[0].中医处方数量;
        var traditionalPrescription3 = handleData(res[3], [3])[0].中医处方数量;
        this.totalSum = [
          tolPrescription0,
          tolPrescription1,
          tolPrescription2,
          tolPrescription3
        ];
        this.chineseMe = [
          traditionalPrescription0,
          traditionalPrescription1,
          traditionalPrescription2,
          traditionalPrescription3
        ];
      });
    },
    getFixdata() {
      var StateTime = "2019-01-01";
      var EndTime = "2019-12-31";
      const url = "/api";
      const City = this.nameCode;
      getSingledata({ url, params: { StateTime, EndTime, City } }).then(res => {
        var hhh = handleData(res.data.data[0].data, [1]);
        hhh[0].forEach((item, index) => {
          this.dataNumberSin.push(item.当月门诊就医数量); // 19年的数据
          this.dataTimeSin.push(item.月份); //19年的月份
        });
      });
      var StateTime = "2018-01-01";
      var EndTime = "2018-12-31";
      getSingledata({ url, params: { StateTime, EndTime, City } }).then(res => {
        var hhh = handleData(res.data.data[0].data, [1]);
        hhh[0].forEach((item, index) => {
          this.dataNumberDou.push(item.当月门诊就医数量); //18年的数据
        });
      });
    },
    getChoiceData(data) {
      this.getNewdate = data;
    }
  },
  mounted() {
    this.getCountryData();
    this.getFixdata();
  },
  watch: {
    getNewdate: {
      handler(newdata) {
        var hhh = changeTime(newdata);
        this.time2 = hhh[1];
        this.time1 = hhh[0];
        this.chineseMe = []; // 清除中医处方数组会拥挤
        this.totalSum = []; // 清除处方总数
        this.getCountryData();
      }
    }
  }
};
</script>

<style scoped>
.test {
  height: 73.7vh;
}
/* .el-row {
    margin-bottom: 20px;
  } */
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 0 0 10px 0;
  background-color: #f9fafc;
}
</style>