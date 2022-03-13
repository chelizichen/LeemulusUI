// const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware')
module.exports = function(app)
{
    // app.use(proxy.createProxyMiddleware('/api1',{
    //     target:'http://localhost:3001',
    //     changeOrigin:true,
    //     pathRewrite:{
    //         '^/api1':''
    //     }
    // }))

    app.use(proxy.createProxyMiddleware('/api1',{
        target:'http://fund.eastmoney.com',
        changeOrigin:true,
        pathRewrite:{
            '^/api1':''
        }
    }))
}