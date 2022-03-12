import { useEffect, useState } from "react";
import { useLocation,useRoutes,useSearchParams } from "react-router-dom";
import { Board } from "../../../../leemulus/Board";
import { Title } from "../../../../leemulus/Title";
function UseLocationDemo(props:any)
{
    // const history = useLocation();
    const params = useSearchParams()

    const [msg,setMessage] = useState< string | null>()
    useEffect(()=>{
        setMessage(params[0].get('msg'))
    },[])
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="useSearchParams">介绍</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    使用 useSearchParams 钩子 拿到 参数
                </div>
            </Board>
            <Title title="useSearchParams">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <h1> Message : { msg } </h1>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    {/* 使用 useSearchParams 钩子 拿到 参数 */}
                </div>
            </Board>
            
        </div>
    )
}
export {
    UseLocationDemo
}