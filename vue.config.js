module.exports = {

  devServer: {
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    // port: 8080,
    // open: true,
    // https: false,
    // hotOnly: false,
    // proxy: null, // string | Object
    // proxy: 'http://localhost:3000'
    proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api': { //axios访问 /api ==  target + /api  
        target: 'http://10.178.227.93:1112',
        changeOrigin: true, //创建虚拟服务器 
        // ws:true,//websocket代理
        pathRewrite: {
          '^/api': '/api/home/HomeData'
        }
      },
      '/douban': { // axios 访问 /douban == target + '/douban'
        target: 'https://api.douban.com',
        changeOrigin: true,
        pathRewrite: { //路径替换
          '^/douban': 'v2', // axios 访问/douban/v2 == target + /v2
        }
      },
      '/test': {
        target: 'http://10.178.227.93:1112',
        changeOrigin: true,
        pathRewrite: {
          '^/test': '/api/home'
        }
      }

    }
    // before: app => {}

  }
}