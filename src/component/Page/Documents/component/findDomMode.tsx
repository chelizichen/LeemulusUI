import { Board } from "../../../../leemulus/Board";
import { Title } from "../../../../leemulus/Title";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../../../../leemulus/Button";
class FINDDomMode extends React.Component{
    dom:any
    constructor(props:any)
    {
        super(props)
        this.state = {

        }
    }
    componentDidMount()
    {
        // 查找到 真实dom
        this.dom = ReactDOM.findDOMNode(this)
        console.log(this.dom);
    }
    unMountDom(dom:HTMLElement)
    {
        dom?.remove()
    }
    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="FINDDomMode">介绍</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    DOM 真正被添加到HTML 中的生命周期方法是 ComponentDidMount 和 ComponentDidUpdate
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    得到Dom 节点之后可以做任何事
                </div>
            </Board>
            <Title title="FINDDomMode">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    {"<div style={{width:'78%',marginLeft:'2%'}}>"}
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    {/* 使用 useSearchParams 钩子 拿到 参数 */}
                </div>
            </Board>
            <Title title="FINDDomMode">改变</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <Button onChange={() => this.unMountDom(this.dom)} loading={false} > 删除节点 </Button>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    {/* 使用 useSearchParams 钩子 拿到 参数 */}
                </div>
            </Board>
            
        </div>
        )
    }
}

export {
    FINDDomMode
}