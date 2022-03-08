import { useEffect,useState } from "react"
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
        console.log(timer);
    },[timer])




    return(
        <div>
            <h1>CallBack 组件 </h1>
            <h2>{msg.msg}</h2>
        </div>
    )
}

export{
    TestCallBack
}