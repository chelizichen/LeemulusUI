import React, { useContext } from 'react'
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
        const name = 'LLLLLL'
        return(
            <ContextMsg.Provider value={name}>
                <ChildContext msg="hello world"/>
            </ContextMsg.Provider>
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
            <h1>{msg}</h1>
            <div>{ctx}</div>
        </div>
    )
}
// class ChildContext extends React.Component<C_Props>{
//     static C_Msg = ContextMsg
//     constructor(props:any)
//     {
//         super(props)
//         this.state = {

//         }
        
//     }
//     componentDidMount()
//     {
//         console.log(this);
//     }
//     render()
//     {
//         const { msg } = this.props
//         console.log('render',this);
        
//         return(
//                 <div>{msg}</div>
//         )
//     }
// }
export{
    ContextDemo
}