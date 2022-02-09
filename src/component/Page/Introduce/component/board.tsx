import { Board } from "../../../../leemulus/Board"
import { OutterDoc,InnerDoc } from "../../../../leemulus/Documents"
import { Title } from "../../../../leemulus/Title"

function IBoard()
{
    return (<div style={{width:'70%',padding:'10px 20px 0 20px'}}>
        <Title title="Board">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                    defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"backgroundColor"} type={"string"} intro={"背景颜色"} defaultValue={"rgb(246 249 249)"}></InnerDoc>
                    <InnerDoc name={"style"} type={"object:CSSProperties"} intro={"样式"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"border"} type={"boolean"} intro={"是否展示边框"} defaultValue={"false"}></InnerDoc>
                </OutterDoc>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                    {'<'}Board border={true} style={"{{padding:'20px',marginTop:'20px',marginBottom:'20px'}}"} {`/>`}  
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    效果： 
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    现在看到的都是由{'<Board></Board>'}组件包裹起来的。
                </div>

            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    没有设计，没有功能，纯展示组件～
                </div>
            </Board>
        </div>
    )
}
export {
    IBoard
}