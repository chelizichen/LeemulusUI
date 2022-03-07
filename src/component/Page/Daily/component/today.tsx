// import axios from "axios"
import { useEffect, useState } from "react"
import { initTask } from "./task";
function Today()
{
    let [todayTask,setTask] = useState(initTask);
    useEffect(()=>{
        console.log(todayTask);
        
    })
    return(
        <div>
            <h1>我的一天</h1>
        </div>
    )
}

export {
    Today
}