import React from "react"
import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

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
    componentDidMount()
    {
        this.login();
    }

    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="Decorator">使用</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>

                </div>
            </Board>
            </div>
        )
    }
}

export {
    TestLogin
}