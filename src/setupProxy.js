// const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware')
module.exports = function(app)
{
    app.use(
        proxy.createProxyMiddleware('/api1',
        {
            target:'http://fund.eastmoney.com',
            changeOrigin:true,
            pathRewrite:{
                '^/api1':''
            }
        }),
        proxy.createProxyMiddleware('/api2',
        {
            target:'http://localhost:3001',
            changeOrigin:true,
            pathRewrite:{
                '^/api2':''
            }
        }),
        proxy.createProxyMiddleware('/api3',
        {
            target:'http://localhost:2000',
            changeOrigin:true,
            pathRewrite:{
                '^/api3':''
            }
        })
    )

}