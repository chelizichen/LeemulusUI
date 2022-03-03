import {  useEffect, useState } from "react"
import axiosInstance from "../../../../config/axiosInstance";
import { Board } from "../../../../leemulus/Board";
import { Title } from "../../../../leemulus/Title";

function AxiosComponent()
{

    // 空依赖表示只执行一次
    useEffect(()=>{
        axiosInstance.get('type=song&id=32785674').then(data=>{
            console.log(data);
        }).catch(err=>{
            console.log(err);
        })
    },[])


    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
            <Title title="Axios">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 
                的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    const axiosInstance = axios.create([config])   // 自定义配置
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    axiosInstance.interceptors.request.use(config,error)   // 添加请求拦截器
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    axiosInstance.interceptors.response.use(config,error)   // 添加响应拦截器
                </div>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    axiosInstance.get(url).then( func ).catch( err )
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    axiosInstance.post(url).then( func ).catch( err )
                </div>
                

            </Board>
        </div>
    )
}
export {
    AxiosComponent
}