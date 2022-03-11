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
    // if(successFunc typeof )
    function turnSuccess()
    {   
        new Promise((resolve,reject)=>{
            resolve(successFunc())
        }).then(()=>{
            setSuccess(isSuccess => isSuccess === false?true:false)
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    useEffect(()=>{
        turnSuccess()
    },[])

    return(
        <div style={{backgroundColor:isSuccess === true?color:'whitesmoke',height:'20px',width:'100%'}}></div>
    )
}
export {
    Progress
}