import { useReducer } from "react"
interface itemMenuInterFace{
    index:number,
    todo:string,
    type?:string,
    important?:boolean
}

let initTask:Array<itemMenuInterFace> = [{index:1,todo:'2022 年 2月 21 日 '}]
function Task(){
    let [allTask,dispatch] = useReducer((state = initTask,action:itemMenuInterFace )=>{
        const {todo,type,index} = action
        switch(type)
        {
            case "add":
                return initTask.push({index:initTask.length+1,todo})
            case "sub":
                const subIndex = initTask.findIndex(el=> el.index === index)
                return initTask.splice(subIndex,1)
            default:
                break;
        }
    },initTask)

    function subItem(index:number)
    {
        dispatch({type:'sub',index,todo:''})
    }

    function logValue(e:any){
        if(e.keyCode === 13)
        {
            dispatch({todo:e.target.value,type:'add',index:1})
        }
    }
    return(
        <div>
            <h1>全部任务</h1>
            <h2>
            {
                    initTask.map(element => {
                        return(
                            <div key={element.index} onClick={()=>subItem(element.index)}>{element.todo}</div>
                        )
                    })
                }
            </h2>
            <input type="text" onKeyUp={logValue} />
        </div>
    )
}
export {
    Task,
    initTask
}