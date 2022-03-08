// import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import store from "../../../../store/store";
import { initTask, itemMenuInterFace, taskReducer } from "./task";
function Today()
{
    let [todayTask,setTask] = useState(initTask);
    let [allTask,dispatch] = useReducer(taskReducer,initTask)
    useEffect(()=>{
        console.log(todayTask);
        console.log(store);
        
    })

    function logValue(e:any){
        if(e.keyCode === 13)
        {
            dispatch({todo:e.target.value,type:'add',index:1})
        }
    }
    
    return(
        <div>
            <h1>我的一天</h1>
            <div>
                {
                    todayTask.map((el:itemMenuInterFace)=>{
                        return(
                            <div key={el.index}>{el.todo}</div>
                        )
                    })
                }
            </div>
            <input type="text" onKeyUp={logValue} />

        </div>
    )
}

export {
    Today
}