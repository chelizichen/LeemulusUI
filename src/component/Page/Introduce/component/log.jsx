import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

function Log()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>
            <Title title="2022.3.8 早上">开发日志</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    Echarts 动态更改效果 更改为 Class 组件
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    使用hooks 反而显得有点臃肿且看不懂（还是自己太菜了）
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    疫情封校是真的烦
                </div>
            </Board>

            <Title title="2022.3.7 晚上">开发日志</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    Echarts 动态更改效果
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    疫情封校是真的烦
                </div>
            </Board>

            <Title title="2022.3.7">开发日志</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    Progress 解决反复调用的问题
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    Collapse 小 Bug
                </div>
            </Board>

            <Title title="2022.3.2">开发日志</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    组件展示已基本完成
                </div>
            </Board>

            <Title title="2022.2.9">开发日志</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    Menu 的交互逻辑似乎有点问题，暂未更新，准备重写
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    修改了 PopUp组件 的交互逻辑
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