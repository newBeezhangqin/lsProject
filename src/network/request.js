import {
    numTime,
    monthTime
} from './time.js'
export function request(config) {
    return new Promise((resolve, reject) => {
        const first = axios.create({

        })
        first(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
// 写一个函数 传入参数请求的函数  
export function getSingledata(config) {
    return new Promise((resolve, reject) => {
        const getData = axios({
            ...config
        })
        getData.then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

// 函数处理需要的数据
export function handleData(newData, demand) {
    // console.log(newData[0].SelectItmeList[0],'门诊人次');
    // console.log(newData[1].SelectItmeList,'當年的門診人次');
    // console.log(newData[2].SelectItmeList[0],'处方总数');
    // console.log(newData[3].SelectItmeList[0],'中醫處方');
    // console.log(newData[4].SelectItmeList[0],'門診电子病历');
    // console.log(newData[5].SelectItmeList[0],'药占比');
    // console.log(newData[6].SelectItmeList[0],'门诊收费金额');
    // console.log(newData[7].SelectItmeList,'地區'); 
    //  0 门诊人次 1 当年的门诊人次 2 处方总数 3 中医处方 4 门诊电子病历 5 药占比 6 门诊收费金额  
    var arr = [] // 處理
    if (demand.length == 1) {
        var i = demand[0];
        if (i == 1 || i == 7) {
            arr.push(newData[i].SelectItmeList)
        } else {
            arr.push(newData[i].SelectItmeList[0])
        }
        return arr;
    }
    for (let i of demand) {
        i = Number(i);
        if (i == 1) {
            arr.push(newData[i].SelectItmeList)
        } else {
            arr.push(newData[i].SelectItmeList[0])
        }
    }
    return arr;
}
// 处理月份的函数  需要的参数在params
export function getMonth(num, City) {
    var City = City ? City : null;
    const url = '/api'

    function one(num, City) {
        return axios({
            url: '/api',
            params: {
                StateTime: numTime(num + 7),
                EndTime: numTime(num),
                City
            }
        })
    }

    function two(num, City) {
        return axios({
            url: '/api',
            params: {
                StateTime: numTime(num + 14),
                EndTime: numTime(num + 7),
                City
            }
        })
    }

    function three(num, City) {
        return axios({
            url: '/api',
            params: {
                StateTime: numTime(num + 21),
                EndTime: numTime(num + 14),
                City
            }
        })
    }

    function four(num, City) {
        return axios({
            url: '/api',
            params: {
                StateTime: numTime(num + 28),
                EndTime: numTime(num + 21),
                City
            }
        })
    }
    return new Promise((resolve, reject) => {
        const a = axios.all([one(num, City), two(num, City), three(num, City), four(num, City)])
        a.then(axios.spread(function (one1, two1, three1, four1) {
            var res = [one1.data.data[0].data, two1.data.data[0].data, three1.data.data[0].data, four1.data.data[0].data];
            resolve(res);
        })).catch(err => {
            reject(err)
        })
    })
}
export function getDetail(time, HospCode) {
    var date = numTime(time);
    // 数字加的越多越往前
    // console.log(numTime(time + 2), '+2')
    // console.log(numTime(time + 3) + '+3'); 
    var HospCode = HospCode ? HospCode : ''
    var hhh = date.split('-')
    var year = hhh[0];
    var month = hhh[1];
    // 判断月份和 年份的时候

    // 判断月份 
    // if (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12') {
    //     console.log('31');
    // } else if (month == '04' || month == '06' || month == '09' || month == '11') {
    //     console.log('30');
    // } else if (month == '02') {
    //     console.log('28');
    // }

    function request1(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '01',
                EndTime: year + '-' + month + '-' + '01',
                HospCode
            }
        })
    }

    function request2(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '02',
                EndTime: year + '-' + month + '-' + '02',
                HospCode
            }
        })
    }

    function request3(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '03',
                EndTime: year + '-' + month + '-' + '03',
                HospCode
            }
        })
    }

    function request4(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '04',
                EndTime: year + '-' + month + '-' + '04',
                HospCode
            }
        })
    }

    function request5(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '05',
                EndTime: year + '-' + month + '-' + '05',
                HospCode
            }
        })
    }

    function request6(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '06',
                EndTime: year + '-' + month + '-' + '06',
                HospCode
            }
        })
    }

    function request7(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '07',
                EndTime: year + '-' + month + '-' + '07',
                HospCode
            }
        })
    }

    function request8(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '08',
                EndTime: year + '-' + month + '-' + '08',
                HospCode
            }
        })
    }

    function request9(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '09',
                EndTime: year + '-' + month + '-' + '09',
                HospCode
            }
        })
    }

    function request10(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '10',
                EndTime: year + '-' + month + '-' + '10',
                HospCode
            }
        })
    }

    function request11(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '11',
                EndTime: year + '-' + month + '-' + '11',
                HospCode
            }
        })
    }

    function request12(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '12',
                EndTime: year + '-' + month + '-' + '12',
                HospCode
            }
        })
    }

    function request13(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '13',
                EndTime: year + '-' + month + '-' + '13',
                HospCode
            }
        })
    }

    function request14(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '14',
                EndTime: year + '-' + month + '-' + '14',
                HospCode
            }
        })
    }

    function request15(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '15',
                EndTime: year + '-' + month + '-' + '15',
                HospCode
            }
        })
    }

    function request16(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '16',
                EndTime: year + '-' + month + '-' + '16',
                HospCode
            }
        })
    }

    function request17(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '17',
                EndTime: year + '-' + month + '-' + '17',
                HospCode
            }
        })
    }

    function request18(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '18',
                EndTime: year + '-' + month + '-' + '18',
                HospCode
            }
        })
    }

    function request19(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '19',
                EndTime: year + '-' + month + '-' + '19',
                HospCode
            }
        })
    }

    function request20(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '20',
                EndTime: year + '-' + month + '-' + '20',
                HospCode
            }
        })
    }

    function request21(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '21',
                EndTime: year + '-' + month + '-' + '21',
                HospCode
            }
        })
    }

    function request22(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '22',
                EndTime: year + '-' + month + '-' + '22',
                HospCode
            }
        })
    }

    function request23(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '23',
                EndTime: year + '-' + month + '-' + '23',
                HospCode
            }
        })
    }

    function request24(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '24',
                EndTime: year + '-' + month + '-' + '24',
                HospCode
            }
        })
    }

    function request25(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '25',
                EndTime: year + '-' + month + '-' + '25',
                HospCode
            }
        })
    }

    function request26(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '26',
                EndTime: year + '-' + month + '-' + '26',
                HospCode
            }
        })
    }

    function request27(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '27',
                EndTime: year + '-' + month + '-' + '27',
                HospCode
            }
        })
    }

    function request28(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '28',
                EndTime: year + '-' + month + '-' + '28',
                HospCode
            }
        })
    }

    function request29(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '29',
                EndTime: year + '-' + month + '-' + '29',
                HospCode
            }
        })
    }

    function request30(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '30',
                EndTime: year + '-' + month + '-' + '30',
                HospCode
            }
        })
    }

    function request31(year, month, HospCode) {
        return axios({
            url: '/api',
            params: {
                StateTime: year + '-' + month + '-' + '31',
                EndTime: year + '-' + month + '-' + '31',
                HospCode
            }
        })
    }
    return new Promise((resolve, reject) => {
        var mulRequest = axios.all([request1(year, month, HospCode), request2(year, month, HospCode), request3(year, month, HospCode),
            request4(year, month, HospCode), request5(year, month, HospCode), request6(year, month, HospCode),
            request7(year, month, HospCode), request8(year, month, HospCode), request9(year, month, HospCode),
            request10(year, month, HospCode),
            request11(year, month, HospCode), request12(year, month, HospCode), request13(year, month, HospCode),
            request14(year, month, HospCode),
            request15(year, month, HospCode), request16(year, month, HospCode), request17(year, month, HospCode),
            request18(year, month, HospCode), request19(year, month, HospCode), request20(year, month, HospCode),
            request21(year, month, HospCode), request22(year, month, HospCode), request23(year, month, HospCode),
            request24(year, month, HospCode), request25(year, month, HospCode), request26(year, month, HospCode),
            request27(year, month, HospCode), request28(year, month, HospCode), request29(year, month, HospCode),
            request30(year, month, HospCode)
        ])
        mulRequest.then(axios.spread(function (r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15,
            r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, ) {
            var resPatine = [r1.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r2.data.data[0].data[0].SelectItmeList[0].门诊人次, r3.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r4.data.data[0].data[0].SelectItmeList[0].门诊人次, r5.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r6.data.data[0].data[0].SelectItmeList[0].门诊人次, r7.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r8.data.data[0].data[0].SelectItmeList[0].门诊人次, r9.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r10.data.data[0].data[0].SelectItmeList[0].门诊人次, r11.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r12.data.data[0].data[0].SelectItmeList[0].门诊人次, r13.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r14.data.data[0].data[0].SelectItmeList[0].门诊人次, r15.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r16.data.data[0].data[0].SelectItmeList[0].门诊人次, r17.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r18.data.data[0].data[0].SelectItmeList[0].门诊人次, r19.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r20.data.data[0].data[0].SelectItmeList[0].门诊人次, r21.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r22.data.data[0].data[0].SelectItmeList[0].门诊人次, r23.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r24.data.data[0].data[0].SelectItmeList[0].门诊人次, r25.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r26.data.data[0].data[0].SelectItmeList[0].门诊人次, r27.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r28.data.data[0].data[0].SelectItmeList[0].门诊人次, r29.data.data[0].data[0].SelectItmeList[0].门诊人次,
                r30.data.data[0].data[0].SelectItmeList[0].门诊人次,
            ]
            var resMoney = [
                r1.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r2.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r3.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r4.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r5.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r6.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r7.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r8.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r9.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r10.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r11.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r12.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r13.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r14.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r15.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r16.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r17.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r18.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r19.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r20.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r21.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r22.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r23.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r24.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r25.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r26.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r27.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r28.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r29.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
                r30.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
            ];

            resolve([resPatine, resMoney])
        })).catch(err => {
            reject(err)
        })
    })
    // axios.all([request1(year, month, HospCode), request2(year, month, HospCode), request3(year, month, HospCode),
    //     request4(year, month, HospCode), request5(year, month, HospCode), request6(year, month, HospCode),
    //     request7(year, month, HospCode), request8(year, month, HospCode), request9(year, month, HospCode),
    //     request10(year, month, HospCode),
    //     request11(year, month, HospCode), request12(year, month, HospCode), request13(year, month, HospCode),
    //     request14(year, month, HospCode),
    //     request15(year, month, HospCode), request16(year, month, HospCode), request17(year, month, HospCode),
    //     request18(year, month, HospCode), request19(year, month, HospCode), request20(year, month, HospCode),
    //     request21(year, month, HospCode), request22(year, month, HospCode), request23(year, month, HospCode),
    //     request24(year, month, HospCode), request25(year, month, HospCode), request26(year, month, HospCode),
    //     request27(year, month, HospCode), request28(year, month, HospCode), request29(year, month, HospCode),
    //     request30(year, month, HospCode)
    // ]).then(axios.spread(function (r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15,
    //     r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, ) {
    //     //当月就医的数量 0 // 当月门诊的收费金额 6
    //     var resPatine = [r1.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r2.data.data[0].data[0].SelectItmeList[0].门诊人次, r3.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r4.data.data[0].data[0].SelectItmeList[0].门诊人次, r5.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r6.data.data[0].data[0].SelectItmeList[0].门诊人次, r7.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r8.data.data[0].data[0].SelectItmeList[0].门诊人次, r9.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r10.data.data[0].data[0].SelectItmeList[0].门诊人次, r11.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r12.data.data[0].data[0].SelectItmeList[0].门诊人次, r13.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r14.data.data[0].data[0].SelectItmeList[0].门诊人次, r15.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r16.data.data[0].data[0].SelectItmeList[0].门诊人次, r17.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r18.data.data[0].data[0].SelectItmeList[0].门诊人次, r19.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r20.data.data[0].data[0].SelectItmeList[0].门诊人次, r21.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r22.data.data[0].data[0].SelectItmeList[0].门诊人次, r23.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r24.data.data[0].data[0].SelectItmeList[0].门诊人次, r25.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r26.data.data[0].data[0].SelectItmeList[0].门诊人次, r27.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r28.data.data[0].data[0].SelectItmeList[0].门诊人次, r29.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //         r30.data.data[0].data[0].SelectItmeList[0].门诊人次,
    //     ]
    //     var resMoney = [
    //         r1.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r2.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r3.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r4.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r5.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r6.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r7.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r8.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r9.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r10.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r11.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r12.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r13.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r14.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r15.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r16.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r17.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r18.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r19.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r20.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r21.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r22.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r23.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r24.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r25.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r26.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r27.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r28.data.data[0].data[6].SelectItmeList[0].门诊收费金额, r29.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //         r30.data.data[0].data[6].SelectItmeList[0].门诊收费金额,
    //     ];

    //     // console.log(resNow, '测试');
    //     // console.log(r1.data.data[0].data, r2.data.data[0].data,
    //     //     r3.data.data[0].data,
    //     //     r4.data.data[0].data,
    //     //     r5.data.data[0].data,
    //     //     r6.data.data[0].data,
    //     //     r7.data.data[0].data,
    //     //     r8.data.data[0].data,
    //     //     r9.data.data[0].data,
    //     //     r10.data.data[0].data,
    //     //     r11.data.data[0].data,
    //     //     r12.data.data[0].data,
    //     //     r13.data.data[0].data,
    //     //     r14.data.data[0].data,
    //     //     r15.data.data[0].data,
    //     //     r16.data.data[0].data,
    //     //     r17.data.data[0].data,
    //     //     r18.data.data[0].data,
    //     //     r19.data.data[0].data,
    //     //     r20.data.data[0].data,
    //     //     r21.data.data[0].data,
    //     //     r22.data.data[0].data, r23.data.data[0].data, r24.data.data[0].data, r25.data.data[0].data, r26.data.data[0].data, r27.data.data[0].data,
    //     //     r28.data.data[0].data, r29.data.data[0].data, r30.data.data[0].data, '30天的数据'
    //     // )
    // }))
}