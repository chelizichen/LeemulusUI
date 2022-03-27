import React  from "react";
import { Board } from "../../../../leemulus/Board";
import { Title } from "../../../../leemulus/Title";
import readonly from "../../../../assets/code/readonly.png"
import readonly1 from "../../../../assets/code/readonly1.png"

type StrDescrator = ((target:Object,propertyKey: string | symbol,descriptor: PropertyDescriptor)=>PropertyDescriptor)|void|any


const Readonly:MethodDecorator = 
    (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
        descriptor.writable = false
        return descriptor
}

const StringReadonly:StrDescrator = 
    (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
        descriptor.writable = false
        return descriptor
}

const Nonenumerable:MethodDecorator = (
    (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
        descriptor.enumerable = false
        return descriptor
    }
)
class ReadonlyComponent extends React.Component{
    state={
    }

    @StringReadonly
    msg='hello world'

    @Readonly
    clockwise()
    {
        console.log('the song is clockwise');
    }
    @Nonenumerable
    fun()
    {
        console.log('the song is fun');
        
    }
    componentDidMount()
    {
        this.clockwise()
        try {
            this.msg = '666'
        } catch (error) {
            console.log(error);
            
        }
    }
    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="Readonly">只读装饰器使用</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    修饰后成为只读方法，跟 readonly 一样的
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    <img src={readonly}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    <img src={readonly1}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>
            </Board>
        </div>
        )
    }
}
export {
    ReadonlyComponent
}