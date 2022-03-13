import axios from "axios"
import { useEffect } from "react"
import { FCComponent } from "./component/FCcomponent"
import { TestPureComponentFather } from "./component/PureComponent"
import { HookDemo } from "./component/UseMemo"
import { UseMemoDemo } from "./component/UseMemoDemo"

// 得到数据
// 数据处理
// 加工数据

// api/static/FundCommpanyInfo.js
function Manage()
{
    useEffect(()=>{
        // axios.get('/api1/todo/all').then(data=>{
        //     console.log(data);
        // }).catch(err=>{
        //     console.log(err);
        // })

        axios.get('/api1/api/static/FundCommpanyInfo.js').then(res=>{
            // console.log(res.data.split('='));
            let arr = res.data.split('=')
            console.log(arr[1]);
            arr[1] = eval("("+arr[1]+")")
            console.log(arr[1]);
        }).catch(err=>{
            console.log(err);
        })
        // axios.get('/api1/pingzhongdata/320007.js').then(res=>{
        //     console.log(res.data); 诺安的数据
        // }).catch(err=>{
        //     console.log(err);
        // })
    },[])
    return(
        <div>
            <h1>Manage</h1>
            <FCComponent firstName={"leemulus"} lastName={""}/>
            <TestPureComponentFather />
            <HookDemo/>
            <UseMemoDemo/>
        </div>
    )
}
export  {
    Manage
}