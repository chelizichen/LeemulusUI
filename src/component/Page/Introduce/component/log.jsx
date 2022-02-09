import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

function Log()
{
    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
            <Title title="2022.2.9">开发日志</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    Menu 的交互逻辑似乎有点问题，暂未更新，准备重写
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    更新了Cell组件
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    更新了Collapse 组件
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    更新了Documents 组件
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    将项目上传到了 Git 上 Git chelizichen/LeemulusUI
                </div>
            </Board>

            <Title title="2022.2.8">开发日志</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    更新了关于Button的 Props 和交互逻辑，我认为Button的点击事件应该有 
                    同步和异步两种，所以重新修改了一下。
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    更新了Article组件
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    更新了Board 组件
                </div>
            </Board>
            <Title title="独白">开发过程中的问题</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    组件库在用JS写完以后全部使用TS重构，
                    这对于JavaScript程序员来说并不是一件容易的事，
                    但是可以预见的是TypeScript在未来仍是主流，
                    所以我得主动拥抱TypeScript。
                </div>
            </Board>
        </div>
    )
}
export {
    Log
}