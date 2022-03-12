import { useReducer } from "react"
import { Board } from "../../../../leemulus/Board"
import { Switch } from "../../../../leemulus/Switch"
import { ShowCurrTime } from "../../../../leemulus/Time"
import { Title } from "../../../../leemulus/Title"
interface itemMenuInterFace{
    index:number,
    todo:string,
    type?:string,
    important?:boolean
}



// let initTask:Array<itemMenuInterFace> = [{index:1,todo:'2022 年 2月 21 日 '}]
let initTask:any = [{index:1,todo:'2022 年 2月 21 日 '}]

let taskReducer = function(state = initTask,action:any)
{
    const {todo,type,index,important} = action
        switch(type)
        {
            case "add":
                return initTask.push({index:initTask.length+1,todo,important})
            case "sub":
                const subIndex = initTask.findIndex((el:itemMenuInterFace) => el.index === index)
                return initTask.splice(subIndex,1)
            default:
                break;
        }
}

function Task(){
    let [allTask,dispatch] = useReducer(taskReducer,initTask)

    function subItem(index:number)
    {
        dispatch({type:'sub',index,todo:''})
    }
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

                <Title title="Task">
                    <ShowCurrTime/>
                </Title>
    
                <Board  border style={{padding:'30px 50px',marginTop:'20px',marginBottom:'20px'}}>       
                    <ol>
                        {
                            allTask.map((el:itemMenuInterFace)=>{
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
    Task,
    initTask,
    taskReducer
}
export type { itemMenuInterFace }
