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