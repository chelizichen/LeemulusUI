import React from "react"
import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"
import LoginTest from "../.././../../assets/code/loginTest.png"
// 模拟 LocalStorage 登陆数据
const store = {
    login:{
        name:'lee',
        password:'mulus'
    } as LoginType,
}
const LoginItem=(LoginData:LoginType):MethodDecorator=>{
    return (...args)=>{
        const [,,descriptor] = args
        const method = (descriptor as PropertyDescriptor).value
        if(LoginData.name ==='lee' && LoginData.password === 'mulus')
        {
            console.log('登陆成功');
            method()
        }
        else
        {
            throw new Error("登陆失败，密码不正确");
        }
    }
}

const testLog1:MethodDecorator=(target:Object,prop:string|symbol,descriptor:PropertyDescriptor)=>{
    const method = descriptor.value
    descriptor.value = function()
    {
        console.log(' 第一次打印');
        return method.apply(this,arguments)
    }
}
const testLog2:MethodDecorator=(target:Object,prop:string|symbol,descriptor:PropertyDescriptor)=>{
    const method = descriptor.value
    descriptor.value = function()
    {
        console.log(' 第二次打印');
        return method.apply(this,arguments)
    }
}

type LoginType = {
    name:string,
    password:string,
}
class TestLogin extends React.Component
{
    constructor(props:any)
    {
        super(props)
        this.state = {
            name:'',
            password:'',
        } as LoginType
    }

    @LoginItem(store.login)
    login()
    {
        console.log('你好赛利亚');
    }

    @testLog1
    @testLog2
    log123()
    {
        console.log('第三次打印');
    }
    componentDidMount()
    {
        this.login();
        this.log123()
    }

    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="Decorator">使用顺序</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    函数装饰器从上至下依次出现效果
                </div>
            </Board>

            <Title title="Decorator">验证登陆</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    将账号密码放在装饰器参数里面用来验证登陆
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    <img src={LoginTest}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>

            </Board>
            </div>
        )
    }
}

export {
    TestLogin
}