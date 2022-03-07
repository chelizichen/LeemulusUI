import React from 'react'
interface testState{
    name:string,
    num:number
}
class TestPureComponentFather extends React.Component<{},testState,any>{
    constructor(props:any)
    {
        super(props);
        this.addNum = this.addNum.bind(this)
    }

    addNum()
    {
        const {num} = this.state
        this.setState({
            num:num+1
        })
    }
    
    state = {
        name:'hello world',
        num:1
    }
    render()
    {
        const { num,name } = this.state
        return(
            <div>
                <h1> 父组件 : {name} </h1>
                <h1> state.num :{num} </h1>
                <button onClick={()=>this.addNum()}>点击增加</button>

                <TestPureComponentChildren firstName="leemulus" lastName="day3.4 fri"/>
            </div>
        )
    }
}

interface ChildernProps{
    firstName:string,
    lastName:string,
}
class TestPureComponentChildren extends React.PureComponent<ChildernProps>{
    render()
    {
        console.log('重新渲染');
        const {firstName,lastName} = this.props
        return(
            <div>
                <h1>子组件</h1>
                <h2>{firstName} {lastName} </h2>
            </div>
        )
    }
}
export {
    TestPureComponentFather
}