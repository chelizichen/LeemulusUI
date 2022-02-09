import React, { useReducer } from "react";
import AftComponent from '../container/test'
// import { NavBar } from "../leemulus/NavBar";
import HookDemo from "./hookdemo";
// import App from "./listDemo";

// import store from '../store/store'
class PageA extends React.Component{
    render()
    {
        return(
            <div>
                {/* <NavBar/> */}
                <div>1</div>
                <AftComponent/>
                <HookDemo/>
                {/* <TestAftComponent/> */}
                <CountDemo/>

                {/* <App/> */}
            </div>
        )
    }
}

function reducerDemo(initState = 1,action)
{
    console.log(action);
    const {type,data} = action
    switch(type)
    {
        case "add":
            return initState + data;
        case "sub":
            return initState - data;
        default:
            return initState
    }
}

function CountDemo()
{
    const [count,dispatch] = useReducer(reducerDemo,0)
    return(
        <div>
            <div>Your Count is + {count}</div>
            <button onClick={()=>dispatch({type:'add',data:1})}>加</button>
            <button onClick={()=>dispatch({type:'sub',data:1})}>减</button>
        </div>
    )
}

export default PageA