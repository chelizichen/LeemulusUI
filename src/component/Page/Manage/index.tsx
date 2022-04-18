import axios from "axios"
import { useEffect } from "react"
import { FCComponent } from "./component/FCcomponent"
import { TestPureComponentFather } from "./component/PureComponent"
import { HookDemo } from "./component/UseMemo"
import { UseMemoDemo } from "./component/UseMemoDemo"

function Manage()
{
    useEffect(()=>{
        axios.post('/api3/reports/2',{
            "email":"1347290221@qq.com",
            "password":"123456"
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <div>
            {/* <h1>Manage</h1> */}

            {/* <FCComponent firstName={"leemulus"} lastName={""}/>
            <TestPureComponentFather />
            <HookDemo/>
            <UseMemoDemo/> */}
        </div>
    )
}
export  {
    Manage
}