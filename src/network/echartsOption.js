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
            trigger: "item",
            formatter: "点击进{b}",
            backgroundColor: "#41bcd3"
        },
        series: [{
            name: "中国",
            type: "map",
            mapType: "lishui",
            selectedMode: "single", //multiple多选
            zoom: 1.3, //控制地图的大小 缩放的比例
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: "#32b16c", //地图字的颜色
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
            }
        }]
    }


}