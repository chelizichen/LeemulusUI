import { useEffect } from "react"
import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"
import setNumProxy from "../../../../proxy/setNumProxy"

function Presicion()
{
    useEffect(()=>{

        // 版本 # 0.0.1
        let num = setNumProxy({
            a:0.1,
            b:0.2,
        },100)       
        console.log((num.a+num.b)/100);
    })

    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
            <Title title="Presicion">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    JavaScript 会出现精度丢失的现象
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    例子：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    0.1 + 0.2 = 0.30000000000000004
                </div>

            </Board>

            <Title title="0.0.1">开发日志</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    添加 setNumProxy 函数，将对象中的参数值 * 10,后面手动返回
                </div>

            </Board>
        </div>
    )
}
export{
    Presicion
}