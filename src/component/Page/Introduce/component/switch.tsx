import { Board } from "../../../../leemulus/Board"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Switch } from "../../../../leemulus/Switch"
import { Title } from "../../../../leemulus/Title"
function ISwitch()
{
    function sayHello()
    {
        console.log('hello world');
    }

    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
        <Title title="Switch">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"defaultChecked"} type={"boolean"} intro={"默认值"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"bindChange"} type={"Function"} intro={"最小值"} defaultValue={"-"}></InnerDoc>
                
                </OutterDoc>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                    { `<Switch defaultChecked={false} bindChange={()=>sayHello()} />`}
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    效果：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <Switch defaultChecked={false} bindChange={()=>sayHello()} />
                </div>



            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    点击触发事件
                </div>
            </Board>
        </div>
    )
}
export{
    ISwitch
}