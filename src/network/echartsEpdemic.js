export function getOption(nameCountry) {
    return {
        tooltip: {
            trigger: "item",
            formatter: "点击进入{b}的医院",
            backgroundColor: "#41bcd3"
        },
        series: [{
            name: "中国",
            type: "map",
            mapType: nameCountry,
            selectedMode: "single", //multiple多选
            zoom: 1, //控制地图的大小
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: "#05afe5", //地图字的颜色
                            fontSize: 40
                        }
                    },
                    borderWidth: 5,
                    areaStyle: {
                        color: "red"
                    },
                    areaColor: "#07466a", //地图的颜色数据
                    borderColor: "#05afe5" //区块的边框颜色
                },
                emphasis: {
                    //鼠标hover样式
                    areaColor: "#41bcd3", //地图的颜色
                    label: {
                        show: true,
                        textStyle: {
                            color: "#040b1a" //鼠标滑过的时候字体的颜色
                        }
                    }
                }
            }
        }]
    };
}
export function getBigoption() {
    return {
        tooltip: {
            triggerOn: "mousemove",
            formatter: function (e) {
                // return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
                var a = Object.values(e.data);
                var list = [];
                console.log(a);

                // listItem = list.join('<br>')
                // return e + '<div class="showBox">' + listItem + '</div>'
                var res = '地区: ' +
                    a[0] +
                    '总数: ' +
                    a[1] +
                    '男: ' +
                    a[2] +
                    '女: ' +
                    a[3]
                // listItem = res.join('<br>')
                return res
            }
        },
        visualMap: {
            min: 0,
            max: 1000,
            left: 26,
            bottom: 40,
            showLabel: !0,
            text: ["高", "低"],
            textStyle: {
                color: '#fff'
            },
            pieces: [{
                gt: 100,
                label: "> 100 人",
                color: "#41dbf7"
            }, {
                gte: 50,
                lte: 100,
                label: "10 - 100 人",
                color: "#2e99ae"
            }, {
                gte: 1,
                lt: 50,
                label: "1 - 9 人",
                color: "#14697d"
            }, {
                value: 0,
                color: "#004558"
            }],
            show: !0
        },
        series: [{
            name: "地区发热人数",
            type: "map",
            mapType: "lishui",
            selectedMode: "single", //multiple多选

            zoom: 1.3, //控制地图的大小 缩放的比例
            animation: false,
            roam: true,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: "#fff", //地图字的颜色
                            fontSize: 17
                        }
                    },
                    borderWidth: 2,
                    areaStyle: {
                        color: "red"
                    },
                    areaColor: "#07466a", //地图的颜色数据
                    borderColor: "#05afe5" //区块的边框颜色
                },
                emphasis: {
                    //鼠标hover样式  高亮下情况
                    areaColor: "#41bcd3", //地图的颜色
                    label: {
                        show: true,
                        textStyle: {
                            color: "#040b1a" //鼠标滑过的时候字体的颜色
                        }
                    }
                }
            },
            data: [{
                    name: '莲都区',
                    value: 23,
                    man: 13,
                    woman: 10

                }, {
                    name: '青田县',
                    value: 99,
                    man: 44,
                    woman: 55,
                }, {
                    name: '缙云县',
                    value: 69,
                    man: 60,
                    woman: 9
                }, {
                    name: '遂昌县',
                    value: 12,
                    man: 6,
                    woman: 6
                }, {
                    name: '松阳县',
                    value: 30,
                    man: 20,
                    woman: 10

                }, {
                    name: '云和县',
                    value: 40,
                    man: 12,
                    woman: 28
                }, {
                    name: '庆元县',
                    value: 50,
                    man: 25,
                    woman: 25
                }, {
                    name: '景宁县',
                    value: 70,
                    man: 23,
                    woman: 47
                },
                {
                    name: '龙泉市',
                    value: 66,
                    man: 33,
                    woman: 33
                },
                {
                    name: '云和县',
                    value: 80,
                    man: 43,
                    woman: 37
                },
                {
                    name: '景宁畲族自治县',
                    value: 72,
                    man: 12,
                    woman: 50
                }
            ]
        }]
    }


}