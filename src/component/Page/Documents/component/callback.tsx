import { useEffect } from "react"

function setCallBack(target:Object,fn:Function)
{
    fn.call(target);
    return target
}
function TestCallBack()
{
    useEffect(()=>{
        setCallBack({
            a:1,
            b:2
        },()=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            // a+b;
        })
    })
    return(
        <div>
            <h1></h1>
        </div>
    )
}

export{
    TestCallBack
}