import React  from "react";
import { Board } from "../../../../leemulus/Board";
import { Title } from "../../../../leemulus/Title";
import DescPic from "../../../../assets/code/dec.png"
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

const FlexCenter:MethodDecorator=
    (target:Object,props:string|symbol,descriptor:PropertyDescriptor)=>{
        const methods = descriptor.value
        descriptor.value = function()
        {
            return (
                <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
                    {methods.apply(this.value,arguments)}
                </div>
            )    
    }
}

const Delay=(delayTime:number):MethodDecorator=>{
    return (target:Object,propkey:string|symbol,descriptor:PropertyDescriptor)=>
    {
        const method = descriptor.value
        setTimeout(()=>{
            method()
        },delayTime)
    }
}

const GetError=(errMsg:string):MethodDecorator=>{
    return (...args)=>{
        const [,,descriptor] = args 
        const methods = (descriptor as PropertyDescriptor).value;
        try{
            methods()
        }catch(e)
        {
            console.error(`%c${errMsg}`,'font-size:30px')
            console.error(e);
        }

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

    @FlexCenter
    CenterDiv(msg:string)
    {
        return 'this is a message '+msg
    }
    @Delay(2000)
    sayHello()
    {
        console.log('延迟输入');
    }
    @GetError("测试打印错误消息")
    testError()
    {
        console.log('hello world NXT');
        throw new Error("错误消息");
    }
    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="Decorator">使用</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    <img src={DescPic}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>
            </Board>

            <Title title="Decorator">效果</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    {this.TestStrDiv()}
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',textAlign:'justify'}}>
                    {this.add(1,2)}
                </div>
                <div>{this.CenterDiv('hello world')}</div>
            </Board>
        </div>
        )
    }
}
export {
    DecoratorDemo
}