import { useEffect } from "react"
import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

function Demo2()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="2022.3.7 晚上">开发日志</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    <h1>测试 生命周期钩子</h1>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    Echarts 动态更改效果
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    疫情封校是真的烦
                </div>
            </Board>
            <SonDemo2/>

        </div>
    )
}

function SonDemo2()
{
    useEffect(()=>{
        console.log('hello world');
    },[])

    useEffect(()=>()=>{
        console.log('生命周期结束钩子');
    })

    return(
        <div>
            <Title title="SomDemo2">子组件</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    <h1>测试 生命周期钩子</h1>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    Echarts 动态更改效果
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    疫情封校是真的烦
                </div>
            </Board>
        </div>
    )
}

function SomDemo3()
{
    return(
        <div>
            <h1></h1>
        </div>
    )
}
export{
    Demo2
}