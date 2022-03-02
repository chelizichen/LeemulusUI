import { Board } from "../../../../leemulus/Board"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Progress } from "../../../../leemulus/Progress"
import { Title } from "../../../../leemulus/Title"
function IProgress()
{
    // function alertHello()
    // {
    //     alert('hello world')
    // }
    function promiseAlert()
    {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('heelo world')
            },2000)
        })
    }

    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
        <Title title="Progress">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"color"} type={"string"} intro={"内间距"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"successFunc"} type={"Promise<any>"} intro={"标题"} defaultValue={"-"}></InnerDoc>
                
                </OutterDoc>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                    { '<Progress successFunc={promiseAlert}  color="blue"/> '}
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    效果：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <Progress successFunc={promiseAlert}  color="blue"/>

                </div>



            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    触发异步任务之后Progress 显示
                </div>
            </Board>
        </div>
    )
}
export{
    IProgress
}