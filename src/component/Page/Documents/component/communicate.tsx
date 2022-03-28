import React from "react";
import { Board } from "../../../../leemulus/Board";
import { Title } from "../../../../leemulus/Title";
class CommunicateComponent extends React.Component
{
    state ={
        num: null
    }
    handleCallBack=(e:any)=>{
        this.setState({
            num:e
        })
        // this.childState.e = e
    }
    render()
    {
        const {num} = this.state
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>
            <Title title="React 父子组件通信">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    原生ReactClass 组件 父子组件通信
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    父组件{num}
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>              
                    <ChildrenComponent msg="Hello Child Props" PropsClick={(e:any)=>{this.handleCallBack(e)}} />
                </div>
            </Board>
            </div>
        )
    }
}
interface c_Props
{
    msg:string,
    PropsClick:Function
}
interface c_State{
    num:number
}
class ChildrenComponent extends React.Component<c_Props,c_State>
{
    state={
        num:1 as number
    }

    add=()=>{
        this.setState({
            num:this.state.num+1
        })
    }
    componentDidMount()
    {
        const {msg} = this.props
        console.log(msg); //打印为 Hello Child Props
    }
    render()
    {
        const {PropsClick} = this.props
        return(
            <div>
                <h1>{this.props.msg}</h1>
                <h2>{this.state.num}</h2>
                <button onClick={()=>PropsClick(this.state.num)}>点击事件</button>
                <br />
                <button onClick={()=>this.add()}>增加</button>
            
            </div>
        )
    }
}
export {
    CommunicateComponent
}