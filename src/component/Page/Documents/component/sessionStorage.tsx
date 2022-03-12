import {  useEffect, useState } from "react"
import { Board } from "../../../../leemulus/Board";
import { Button } from "../../../../leemulus/Button";
import { Title } from "../../../../leemulus/Title";

function SessionStorageComponent()
{
    let [data,SetData] = useState<number>(1)
    let [currSong,setSong] = useState<any>('')
    // 创立 时 
    useEffect(()=>{
        sessionStorage.setItem('currSong','Senerity')
        setSong( sessionStorage.getItem('currSong') );
    },[])


    // 添加依赖项 监听变化
    useEffect(()=>{
        console.log('data 被改变了');
        console.log(sessionStorage.getItem('currSong'));
        if(data > 3)
        {
            sessionStorage.removeItem('currSong');
            setSong('')
        }
    },[data])

    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="SessionStorage">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    sessionStorage 属性允许你访问一个，对应当前源的 session Storage 对象。
                    它与 localStorage 相似，不同之处在于 localStorage 里面存储的数据没有过期时间
                    设置，而存储在 sessionStorage 里面的数据在页面会话结束时会被清除。
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    注意:
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify',paddingLeft:'30px'}}>
                    <ul>
                        <li>页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。</li>
                        <li>在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，这点和 session cookies 的运行方式不同。</li>
                        <li>打开多个相同的 URL 的 Tabs 页面，会创建各自的 sessionStorage。</li>
                        <li>关闭对应浏览器标签或窗口，会清除对应的 sessionStorage。 </li>
                        
                    </ul>
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    创建：sessionStorage.setItem('myCat', 'Tom');
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    获取：sessionStorage.getItem('myCat')
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    移除：sessionStorage.remove('myCat')
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    移除所有：sessionStorage.clear()
                </div>
            </Board>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <h3> 展示 ：sessionStorage - (currSong) 「 {currSong} 」</h3>
                <h2>{data}</h2>
                <Button onChange={()=>{SetData(data++)}} loading={false} type="primary"> 点击增加</Button>
            </Board>
        </div>
    )
}
export {
    SessionStorageComponent
}