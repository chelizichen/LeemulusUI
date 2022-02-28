import {   useReducer } from "react";
// import { addItemReducer,initState } from "./addItemReducer";

interface itemMenuInterFace{
    index?:number,
    todo:string,
    type:string,
}


let initState = [{index:1,todo:'2022 年 2月 21 日 '}]
function AddItem()
{
    // let [itemMenu,dispatch] = useReducer(addItemReducer)
    let [itemMenu,dispatch] = useReducer((state = initState,action:itemMenuInterFace)=>{
        const {todo,type,index} = action
        switch(type)
        {
            case "add":
                return initState.push({index:initState.length+1,todo})
            case "sub":
                const subIndex = initState.findIndex(el=> el.index === index)
                return initState.splice(subIndex,1)
            default:
                break;
        }
    },initState)

    function logValue(e:any){
        if(e.keyCode === 13)
        {
            dispatch({todo:e.target.value,type:'add'})
            console.log(initState);
            console.log('itemMenu',itemMenu);
            
        }
    }

    function subItem(index:number)
    {
        dispatch({type:'sub',index,todo:''})
    }

    return(
        <div style={{textAlign:'center'}}>
            <input type="text" onKeyUp={logValue} />
            <>
                {
                    initState.map(element => {
                        return(
                            <div key={element.index} onClick={()=>subItem(element.index)}>{element.todo}</div>
                        )
                    })
                }
            </>
        </div>
    )
}
export {
    AddItem
}