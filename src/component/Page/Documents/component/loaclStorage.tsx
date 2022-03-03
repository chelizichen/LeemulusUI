import {  useEffect, useState } from "react"
import { Board } from "../../../../leemulus/Board";
import { Button } from "../../../../leemulus/Button";
import { Title } from "../../../../leemulus/Title";

function LocalStorageComponent()
{
    let [data,SetData] = useState<number>(1)
    let [currSong,setSong] = useState<any>('')
    // 创立 时 
    useEffect(()=>{
        localStorage.setItem('currSong','ClockWise')
        setSong( localStorage.getItem('currSong') );
    },[])


    // 添加依赖项 监听变化
    useEffect(()=>{
        console.log('data 被改变了');
        console.log(localStorage.getItem('currSong'));
        if(data > 3)
        {
            localStorage.removeItem('currSong');
            setSong('')
        }
    },[data])

    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
            <Title title="LocalStorage">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    只读的localStorage 属性允许你访问一个Document 源（origin）的对象 Storage；
                    存储的数据将保存在浏览器会话中。localStorage 类似 sessionStorage，但其区别在于：
                    存储在 localStorage 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，
                    存储在 sessionStorage 的数据会被清除 。应注意，无论数据存储在 localStorage 还是
                    sessionStorage ，它们都特定于页面的协议。另外，localStorage 中的键值对总是以字符
                    串的形式存储。 (需要注意, 和js对象相比, 键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    创建：localStorage.setItem('myCat', 'Tom');
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    获取：localStorage.getItem('myCat')
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    移除：localStorage.remove('myCat')
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    移除所有：localStorage.clear()
                </div>
            </Board>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <h3> 展示 ：localStorage - (currSong) 「 {currSong} 」</h3>
                <h2>{data}</h2>
                <Button onChange={()=>{SetData(data++)}} loading={false} type="primary"> 点击增加</Button>
            </Board>
        </div>
    )
}
export {
    LocalStorageComponent
}