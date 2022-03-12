import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

function Intro()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="简介">为何考虑写一个UI Frame</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    起初了解到UI框架是大二任课老师给我看了所做的项目，
                    所用的的是JQuery+BootStrap，这是第一次了解相关的概念。
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    大二上学期结束以后我自学了Vue，同时使用Vant作为搭配的UI框架
                    在开发的过程中感受到了UI框架带来的便捷，但是因为一直使用的是别人的框架，
                    所以对封装好的组件本身和其运行机制不是特别了解。
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    大二结束的暑假在瞄瞄科技实习，所用的技术栈是Vue2+Element，
                    在实习过程中常常因为看不懂UI框架（Element）的文档而苦恼，所幸任务量并不是特别大，
                    所以实习时也可以腾出时间来学习
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    大三上学期时开始用TypeScript，此时问题就一一暴露出来了，
                    常常出现不能理解的Bug并且在网上也鲜有解决方案（还是我太菜了），
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    寒假自学React以后使用 Antd+TypeScript 也经常报错，于是考虑是否自己写一个UI组件库（造轮子工程），
                    Leemulus UI 诞生啦！
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
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    Hooks使得React开发变得有趣起来，组件库全部使用Hooks编写，
                    使得我对Hooks的理解进一步加深，
                    但我仍然是一个React菜鸟，希望在开发的过程中能不断进步
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