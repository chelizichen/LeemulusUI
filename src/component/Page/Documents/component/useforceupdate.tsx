import { useState,useMemo } from "react"
import { Board } from "../../../../leemulus/Board"
import { Button } from "../../../../leemulus/Button"
import { Title } from "../../../../leemulus/Title"
import { UseForceUpdate } from "../../../../proxy/useForceUpdate";
// import diyhook from "../../../../assets/code/diyhook.png"

function UseForceUpdateDemo()
{
    // let [count,setCount] = useState<number>(0)   
    const foreUpdate = UseForceUpdate()
    let value = 0
    useMemo(()=>{
        return value
    },[value]);
    function add()
    {
        value++
        console.log(value);
        if(value=== 10)
        {
            console.log("重新打印")
            foreUpdate()
        }
    }

    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="useForceUpdate">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>           
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    强制更新Hooks
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    {/* <img src={diyhook}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/> */}
                </div>
            </Board>
            <Title title="useForceUpdate">使用</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>           
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <h1>{value}</h1>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    <Button onChange={() => add()} loading={false}>点击增加</Button>
                </div>
            </Board>
        </div>
    )
}
export {
    UseForceUpdateDemo
}