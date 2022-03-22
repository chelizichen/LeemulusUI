import { Board } from "../../../../leemulus/Board";
import { Title } from "../../../../leemulus/Title";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../../../../leemulus/Button";
class RefDemo extends React.Component{
    textNode:any
    constructor(props:any)
    {
        super(props)
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
        this.getRealDom = this.getRealDom.bind(this)
    }
    componentDidMount()
    {
    }
    handleClick(){
        console.log(this.textNode.value);
    }
    getRealDom()
    {
        let v_Dom = this.textNode
        let r_Dom = ReactDOM.findDOMNode(v_Dom)
        r_Dom?.remove()
    }
    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="Ref">介绍</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    介绍：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    学习 Ref 
                </div>
            </Board>
            <Title title="Ref">介绍</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    Ref:<input ref={inpRef=>this.textNode = inpRef} onChange={()=>this.handleClick()}/>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    Button:<Button loading={false} onChange={this.getRealDom} type="primary" style={{width:'200px',display:'inline-block'}}> 得到真实DOM</Button>
                </div>
            </Board>
            
        </div>
        )
    }
}

export {
    RefDemo
}