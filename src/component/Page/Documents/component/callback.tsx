import { useEffect,useState } from "react"
import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"
// import { clearTimeout } from "timers"

interface callBackPropkey{
    msg:string,
    name?:string,
    value?:any
}
function setCallBack(target:Object,fn:Function)
{
    return fn(target)
}
function TestCallBack()
{
    const [msg,setMsg] = useState<callBackPropkey>({
        msg:'hello world',
        name:'leemulus'
    })
    const [timer,setTimer] = useState<any>(null)

    function timerFunc()
    {
        return setCallBack(msg,({...args}:callBackPropkey)=>{
            return setTimeout(()=>{
                let newMsg = args
                newMsg.msg = 'hello leemulus'
                setMsg(newMsg)   
            },2000)
        })
    }

    useEffect(()=>{
        setTimer(timerFunc())
    },[])

    useEffect(()=>()=>{
        setTimer(null)
    },[timer])




    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="CallBack">介绍</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>           
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    回调函数，用处很大
                </div>
            </Board>

            <Title title="CallBack">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>           
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    {msg.msg}
                </div>
            </Board>
        </div>
    )
}

export{
    TestCallBack
}