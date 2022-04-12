import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

function Intro()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="简介">为何考虑尝试写 UI 组件</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    灵感大多来自Vant（以前Vant 使用的比较多）
                </div>

            </Board>
            <Title title="TypeScript">开发过程中的问题</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    组件库在用JS写完以后全部使用TS重构，
                </div>

            </Board>

            <Title title="其他">其他问题</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    样式经过只是做了一个大概，并没有去深入更改样式，但是因为在每个UI组件中
                    都内置了，Object.Assign 将 原本的样式和新写的样式进行合并，所以从某种
                    意义上也实现了组件样式的高度可定制化
                </div>
            </Board>
        </div>
    )
}
export {
    Intro
}