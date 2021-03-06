import axios from "axios"
import { useEffect, useReducer } from "react"
import { Contain } from "./mac/contain"
import { WindowsView } from './mac/windows'
import { ItemReducer,initState,initType, actionType } from './mac/ItemReducer'
import {BottomBar} from './mac/bottomBar'
import {Baidu} from './mac/baidu'
import './index.css'

function Manage()
{
    const [WindowsTask,ControlTask] = useReducer<any>(ItemReducer,initState)
    return(
        <div>
            <Contain control={ControlTask}></Contain>
            {
                initState.map((EL:initType)=>{
                    console.log(EL);
                    if(typeof EL.children === 'function')
                    {
                        // console.log('函数类型调用');
                        return (
                            <WindowsView width={EL.width} height={EL.height} key={EL.id}>
                                {
                                    EL.children(EL.props)
                                }
                            </WindowsView>
                        )
                    }
                    else
                    {
                        return(
                            <WindowsView width={EL.width} height={EL.height} key={EL.id}>
                                {EL.children}
                            </WindowsView>
                        )
                    }
                })
            }
            <BottomBar control={ControlTask}></BottomBar>
            {/* <Baidu></Baidu> */}
        </div>
    )
}
export  {
    Manage
}
// import { FCComponent } from "./component/FCcomponent"
// import { TestPureComponentFather } from "./component/PureComponent"
// import { HookDemo } from "./component/UseMemo"
// import { UseMemoDemo } from "./component/UseMemoDemo"
// interface ClassConstructor{
//     new (...args:any[]):{}
// }

// class TestClass{
    
// }
// function TestFunction(A:ClassConstructor) {

// }

// TestFunction('1') // 报错
// TestFunction(TestClass) // 运行通过

            // {/* <h1>Manage</h1> */}

            // {/* <FCComponent firstName={"leemulus"} lastName={""}/>
            // <TestPureComponentFather />
            // <HookDemo/>
            // <UseMemoDemo/> */}