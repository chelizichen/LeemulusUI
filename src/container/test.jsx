import React from 'react'
import { connect } from 'react-redux'
import { a_Action } from '../store/action/a'

class PreComponent extends React.Component{
    add=()=>{
        this.props.add(1*1)
    }
    render()
    {
        return(
            <div>
                <div>{this.props.a}</div>
                <button onClick={this.add}>点击增加</button>
            </div>
        )
    }
}
const AftComponent = connect(
    state=>({
        a:state.a
    }),
    {
        add:a_Action
    }
)(PreComponent)
export default AftComponent
