import React, { useContext } from 'react'
import { Board } from '../../../../leemulus/Board'
import { Title } from '../../../../leemulus/Title'
import CTX1 from '../../../../assets/code/ctx1.png'
import CTX2 from '../../../../assets/code/ctx2.png'

const ContextMsg = React.createContext("123")

class ContextDemo extends React.Component{
    constructor(props:any)
    {
        super(props)
        this.state = {
            msg:'hello',
        }
    }
    render(){
        const name = 'Context 传入的 Value'
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>
                <Title title="Context">代码</Title>
                <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                    <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                        <img src={CTX1}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="ctx 使用"/>
                    </div>
                    <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                        <img src={CTX2}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="ctx 使用"/>
                    </div>
                </Board>
                <Title title="Context">使用</Title>
                <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                    <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                        <ContextMsg.Provider value={name}>
                            <ChildContext msg="hello world"/>
                        </ContextMsg.Provider>
                    </div>
                </Board>
            </div>
        )
    }
}
interface C_Props{
    msg:string
}
function ChildContext(props:C_Props)
{
    const { msg } = props
    const ctx = useContext(ContextMsg)
    return(
        <div>
            <h1>Props: {msg}</h1>
            <h1>Context: {ctx}</h1>
            <h1>孙子组件: <GrandChildContext/></h1>
        </div>
    )
}
function GrandChildContext()
{
    function changeContext(value:any)
    {
        let a1 = 1
        return value+' 消费者 '+a1
    }
    return(
        <ContextMsg.Consumer>
            {value =>changeContext(value)}
        </ContextMsg.Consumer>
    )
}
export{
    ContextDemo
}