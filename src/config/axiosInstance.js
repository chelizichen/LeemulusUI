import axios from "axios";

const axiosInstance = axios.create({
    withCredentials:true,
    baseURL:'http://172.20.10.4:3001/todo',
    timeout:3000
})

axiosInstance.interceptors.request.use(
    config  =>  {
        console.log(config);
    },  err => {
        console.log(' 拦截器 触发失败事件');
        console.log(err);
})

axiosInstance.interceptors.response.use(
    config  =>  {
        console.log(config);
    },  err => {
        console.log(' 拦截器 触发失败事件');
        console.log(err);
})

// 移除拦截器
// axios.interceptors.request.eject(axiosInstance)



export default axiosInstance