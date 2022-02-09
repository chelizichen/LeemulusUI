import React from "react";
import store from '../store/store'
const NameContext = React.createContext()

class PageB extends React.Component{
    
    state={
        name:'leemulus'
    }
    render()
    {
        return(
            <div>
                {/* <div>{store.getState().b}</div> */}
                {/* <div>{store.getState().a}</div> */}
                <NameContext.Provider value={this.state.name}>
                    <Son/>
                </NameContext.Provider>
            </div>
        )
    }
}

class Son extends React.Component
{
    static contextType = NameContext
    render()
    {
        console.log('子组件',this.context);
        return(
            <div>
                <div>子组件{this.context}</div>
                <Grand/>
            </div>
        )
    }
}
function Grand()
{
    // const consumerValue = '1123'
    return(
        <div>
            <div>孙子组件
                <NameContext.Consumer>
                    {
                        value=>{
                            return ` 接收到 context ${value}`
                        }
                    }
                </NameContext.Consumer>
            </div>
            
        </div>
    )
}
export default PageB