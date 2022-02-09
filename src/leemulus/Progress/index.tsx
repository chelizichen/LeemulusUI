import { useEffect, useState } from "react"


interface ProgressProps
{
    color?:string,
    successFunc:()=>Promise<any>
}

function Progress(props:ProgressProps)
{
    const {color,successFunc} = props
    const [isSuccess,setSuccess] = useState<boolean>(false)
    function turnSuccess()
    {
        successFunc().then((data)=>{
            console.log(data);
            setSuccess(true)
        }).catch((error: any)=>{
            console.log(error);
            setSuccess(false)
        })
    }
    useEffect(()=>{
        turnSuccess()
    })
    return(
        <div style={{backgroundColor:isSuccess === true?color:'whitesmoke',height:'20px',width:'100%'}}></div>
    )
}
export {
    Progress
}