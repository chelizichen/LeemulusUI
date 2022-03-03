import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://api.imjad.cn/cloudmusic',
    timeout:3000,
    headers:{'X-Custom-Header': 'foobar'},
    // withCredentials 表示跨域请求时是否需要使用凭证
    withCredentials:true
})

axiosInstance.interceptors.request.use(
    config  =>  {
        console.log(config);
    },  err => {
        console.log(' 拦截器 触发失败事件');
        console.log(err);
})

// axiosInstance.interceptors.response.use(
//     config  =>  {
//         console.log(config);
//     },  err => {
//         console.log(' 拦截器 触发失败事件');
//         console.log(err);
// })

// 移除拦截器
// axios.interceptors.request.eject(axiosInstance)



export default axiosInstance