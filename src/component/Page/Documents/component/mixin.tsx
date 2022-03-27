import React from "react"
import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"
import mixin from "../../../../assets/code/mixin.jpg"

const Mixin = (...args:any):ClassDecorator =>{
    return (target: Function)=>{
        Object.assign(target,...args)
    }
}
const MathMethod ={
    add(x:number,y:number)
    {
        return x+y
    }
}
@Mixin(MathMethod)
class testClass{

}
console.log(testClass);
console.log((testClass as any).add(1,2));

// let a:any = new testClass()
// console.log(a);

// console.log(a.add(1,2))

class MixinComponent extends React.Component{
    componentDidMount()
    {
    }
    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="混入">Mixin</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    在类编译时期添加方法
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    <img src={mixin}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    {/* <img src={readonly1}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/> */}
                </div>
            </Board>
            </div>
        )
    }
}
export {
    MixinComponent
}