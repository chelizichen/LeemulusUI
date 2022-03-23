import React  from "react";
import { Board } from "../../../../leemulus/Board";
import { Title } from "../../../../leemulus/Title";
const HighLight:MethodDecorator=
    (target:Object,prop:string|symbol,descriptor:PropertyDescriptor)=>{
       const methods  = descriptor.value 
       descriptor.value = function(){
           return <div style={{color:"red"}}>{methods.apply(this,arguments)}</div>
       }
}
const Log:MethodDecorator = 
    (target:Object,props:string|symbol,descriptor:PropertyDescriptor)=>{
        const oldValue = descriptor.value
        descriptor.value = function(){
            console.log(arguments);
            return oldValue.apply(this,arguments)
        }
}
class DecoratorDemo extends React.Component{
    state={
    }

    @Log
    @HighLight
    add(x:number,y:number)
    {
        return x+y
    }

    @HighLight
    TestStrDiv()
    {
        return 'hello world'
    }
    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="Decorator">使用</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    {this.TestStrDiv()}
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    {this.add(1,2)}
                </div>
            </Board>
        </div>
        )
    }
}
export {
    DecoratorDemo
}