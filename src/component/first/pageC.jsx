import React from "react";
class A extends React.Component
{
    render()
    {
        return(
            <div style={{margin:'20px'}}>
                <h1>A组件</h1>
                <B stus="给B组件的props">
                    <C stus="给C组件的props"/>
                </B>
                
                <OtherB render={(name)=><OtherC name={name}/>}/>
            </div>
        )
    }
}

class B extends React.Component
{

    render()
    {
        console.log(this.props);
        return(
            <div style={{margin:'20px'}}>
                <h1>B组件</h1>
                {this.props.children}
                {/* <C/> */}
            </div>
        )
    } 
}

class C extends React.Component
{

    render()
    {
        console.log(this.props);
        return(
            <div style={{margin:'20px'}}>
                <h1>C组件</h1>
            </div>
        )
    } 
}

class OtherB extends React.Component
{
    state={
        name:'leemulus'
    }
    render()
    {
        const {name} = this.state
        return(
            <div>
                <h1 style={{color:'red'}}>另一种写法</h1>
                {this.props.render(name)}
            </div>
        )
    }
}

class OtherC extends React.Component
{
    render()
    {
        return(
            <div>
                <h1 style={{color:'red'}}>另一种写法的子组件</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default A