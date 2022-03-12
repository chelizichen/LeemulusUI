import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

function EchartsDoc()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="Echarts 一些使用">总结</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    相对于Hook 来写 Echarts ，我自认为 Class 类组件更容易书写也更容易懂
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    动态显示数据，先在 State 定义一个初始值，然后将数据集合 Push 到 State 中
                </div>
            </Board>
        </div>
    )
}
export {
    EchartsDoc
}