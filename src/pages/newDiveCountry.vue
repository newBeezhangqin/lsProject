<template>
  <div id="epidemic">
    <guideBar />
    <Header>
      <slot>返回上一级</slot>
    </Header>
    <el-row type="flex" style="background:#061123;margin:0;padding:0">
      <el-col style="width:25vw; background:#061123">
        <dataLogo :dataTitle="dataTitle" />
      </el-col>
      <el-col style="width:75vw;background:#061123;margin:0;padding:0">
        <dataLast :dataShow="dataShow" :dataYesShow="dataYesShow" :dataName="dataName" />
      </el-col>
    </el-row>
    <el-row style="background:#061123;">
      <div class="margin">
        <el-col style="width:20.8vw;height:64.8vh;margin-left:1.82vw;">
          <weekContrast
            :recordsTitle="recordsTitle"
            :totalSum="totalSum"
            :chineseMe="chineseMe"
            maxRec="40000"
            :intervalRec="5000"
          />
          <topFive :msg="title" :dragPro="dragPro" style="marginTop:1.82vh" />
        </el-col>
        <el-col style="width:36.3vw;height:73.1vh; margin-left:9.6vw;margin-right:9.6vw">
          <centerSider @sendNewdate="getChoiceData" :Days="time1" :nameCountry="nameCountry" />
        </el-col>

        <el-col style="width:20.8vw;height:73.1vh;overflow:hidden;">
          <singleLine
            :titlesin="titlesin"
            :dataNumber="dataNumberSin"
            :maxSin="50"
            :intervalSin="10"
          />
          <doubleLine
            :titledouble="titledouble"
            :dataNumberSin="dataNumberSin"
            :maxDou="70"
            :intervalDou="10"
            :dataNumberDou="dataNumberDou"
            style="marginTop:1.82vh"
          />
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import guideBar from "../components/otherComp/guideBar";
import Header from "../components/otherComp/Header";
import centerSider from "../components/otherComp/newCenter";
import dataLogo from "../components/dataShow/dataLogo";
import dataLast from "../components/dataShow/dataLast";
import weekContrast from "../components/leftComp/weekContrast";
import topFive from "../components/leftComp/topFive";
import singleLine from "../components/rightComp/singleEp";
import doubleLine from "../components/rightComp/doubleEp";
export default {
  name: "epidemic",
  components: {
    guideBar,
    Header,
    centerSider,
    dataLogo,
    dataLast,
    weekContrast,

    singleLine,
    topFive,
    doubleLine
  },
  data() {
    return {
      title: "地区发热top5",
      test: "",
      recordsTitle: "上月发热人次和门诊人次对比",
      nameCountry: this.$route.query.name,
      titlesin: "当月门诊发热就医用户趋势",
      titledouble: "门诊发热人次对比",
      dataTimeSin: [], //时间的数量
      dataNumberSin: [
        12,
        45,
        23,
        10,
        21,
        32,
        11,
        9,
        23,
        11,
        15,
        17,
        19,
        21,
        14
      ], //每个月的数量
      dataNumberDou: [21, 12, 12, 56, 23, 45, 52, 19, 15, 17, 23, 32, 12, 22],
      dataTitle: "丽水市疫情分析",
      dataName: ["发热人次", "肺炎人次", "上呼吸道感染人次", "呼吸道症状人次"],
      dragPro: [], //门诊收费金额 药品收费金额  药占比
      dataShow: [357, 68, 571, 1413], // 门诊人数 ， 处方总数 ， 门诊电子病历 ，门诊收费金额
      dataYesShow: [782, 230, 982, 2312], // 同上哈
      getNewdate: [],
      Days: 6,
      dataTimeDou: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ],

      time1: 20, // 获取的时间1  数字越大 代表的时间开始越早
      time2: 6, // 获取的时间2
      lastMonth: 30, // 自动获取上个月的时间
      totalSum: [31982, 29087, 32123, 21471, 19203],
      chineseMe: [21239, 12791, 19349, 11568]
    };
  }
};
</script>

<style scoped>
.margin {
  height: 73.7vh;
}
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
.hhh {
  background: #f99;
}
</style>