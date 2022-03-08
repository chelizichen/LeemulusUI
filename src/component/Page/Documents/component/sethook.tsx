import { useState } from "react"
import { Board } from "../../../../leemulus/Board"
import { Button } from "../../../../leemulus/Button"
import { Title } from "../../../../leemulus/Title"

function useNum(initNum:number)
{
    const [num,setNum] = useState<number>(initNum)
    return [num,()=>setNum( num + 1)]
}
function SetNewHook()
{
    // let [count,setCount] = useState<number>(0)
    let [num,SetNum] = useState(0)
    let [newNum,setNewNum] = useNum(10)
    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
            <Title title="SetHook">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>           
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    自定义hooks
                </div>
            </Board>
            <Title title="SetHook">使用</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>           
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <h1>{num}</h1>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    <Button onChange={() => SetNum(num + 1)} loading={false}>点击增加</Button>
                </div>
            </Board>

            <Title title="SetHook">封装</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>           
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <h1>{newNum}</h1>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    <Button onChange={()=>setNewNum} loading={false}>点击增加</Button>
                </div>
            </Board>
        </div>
    )
}
export {
    SetNewHook
}