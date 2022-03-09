// import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import store from "../../../../store/store";
import { initTask, itemMenuInterFace, taskReducer } from "./task";
import { Title } from "../../../../leemulus/Title";
import { Board} from "../../../../leemulus/Board"
import { Switch } from "../../../../leemulus/Switch";
import { ShowCurrTime } from "../../../../leemulus/Time";
function Today()
{
    let [todayTask,setTask] = useState(initTask);
    let [allTask,dispatch] = useReducer(taskReducer,initTask)
    let [isImportant,SetImportant] = useState(false)
    useEffect(()=>{
        console.log(todayTask);
        console.log(store);
    },[])

    function addTask(e:any){
        if(e.keyCode === 13)
        {
            dispatch({todo:e.target.value,type:'add',index:1,important:isImportant})
        }
    }
    function subItem(index:number)
    {
        dispatch({type:'sub',index,todo:''})
    }
    
    function setImportant()
    {
        SetImportant( isImportant => isImportant === true?false:true)
    }
    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
            <Title title="Today">
                <ShowCurrTime/>
            </Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>       
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                    <div>添加任务：</div>
                    <input type="text" onKeyUp={addTask} style={{width:'70%',height:'40px',padding:'0 20px',fontSize:'18px',marginRight:'20px'}}/>
                    <Switch defaultChecked={false} bindChange={()=>setImportant()}/>
                </div>
            </Board>

            <Board  border style={{padding:'30px 50px',marginTop:'20px',marginBottom:'20px'}}>       
                <ol>
                    {
                        todayTask.map((el:itemMenuInterFace)=>{
                            return(
                                <li key={el.index} onClick={()=>subItem(el.index)}>{el.todo}</li>
                            )
                        })
                    }
                </ol>
            </Board>

        </div>
    )
}


export {
    Today
}