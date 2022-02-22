import {   useReducer } from "react";
import { addItemReducer,initState } from "./addItemReducer";

function AddItem()
{
    let [itemMenu,dispatch] = useReducer(addItemReducer)
    function logValue(e){
        if(e.keyCode === 13)
        {
            dispatch({todo:e.target.value,type:'add'})
            console.log(initState);
        }
    }

    function subItem(index)
    {
        dispatch({type:'sub',index})
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