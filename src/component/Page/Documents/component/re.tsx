import React from "react"
import { Board } from "../../../../leemulus/Board"
import { ReTips } from "../../../../leemulus/ReTips"
import { Title } from "../../../../leemulus/Title"
import re from "../../../../assets/code/re.png"

class ReComponent extends React.Component{
    constructor(props:any)
    {
        super(props)
        this.handleRegular = this.handleRegular.bind(this)
    }

    reTest={
        testPhone:(/134[0-9]{4}3442/ as RegExp),  // 匹配电话号码,
        testEmail:(/^[0-9]{5,11}@(qq|163).com/ as RegExp), // 匹配邮箱
        testNull:/\S/, // 首字不能为空
        testEnglishStr:/^[a-zA-Z]+$/, // 开头是为英文
        testChineseStr:/^([\u0931-\uFFE5]{2,4})+$/ // 必须为中文 
    }
    state = {
        eMailIsCorrect:false,
        phoneCorrect:false,
        NullCorrect:false,
        EnglishCorrect:false,
        ChineseStr:false,
    }
    handleRegular(regularString: keyof typeof this.reTest ,str:string,state:keyof typeof this.state)
    {
        
        let testRegular:RegExp = this.reTest[regularString]
        this.setState({
            [state]:testRegular.test(str)
        })
    }

    componentDidMount()
    {

    }
    render()
    {
        const { eMailIsCorrect,phoneCorrect,NullCorrect,ChineseStr,EnglishCorrect } = this.state
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="正则">实验</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    正则实验
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                    <div>
                        邮箱：<input onChange={(el)=>this.handleRegular('testEmail',el.target.value,'eMailIsCorrect')}/>
                    </div>
                    <ReTips falseColor={"red"} trueColor={"green"} fontSize={"16px"} correct={eMailIsCorrect} trueMessage={"输入正确"} falseMessage={"1347290221@qq.com"}></ReTips>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                    <div>
                        电话：<input onChange={(el)=>this.handleRegular('testPhone',el.target.value,'phoneCorrect')}/>
                    </div>
                    <ReTips falseColor={"red"} trueColor={"green"} fontSize={"16px"} correct={phoneCorrect} trueMessage={"输入正确"} falseMessage={"134xxxx3442"}></ReTips>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                    <div>
                        中文：<input onChange={(el)=>this.handleRegular('testChineseStr',el.target.value,'ChineseStr')}/>
                    </div>
                    <ReTips falseColor={"red"} trueColor={"green"} fontSize={"16px"} correct={ChineseStr} trueMessage={"输入正确"} falseMessage={"134xxxx3442"}></ReTips>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                    <div>
                        英文<input onChange={(el)=>this.handleRegular('testEnglishStr',el.target.value,'EnglishCorrect')}/>
                    </div>
                    <ReTips falseColor={"red"} trueColor={"green"} fontSize={"16px"} correct={EnglishCorrect} trueMessage={"输入正确"} falseMessage={"134xxxx3442"}></ReTips>
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                    <div>
                        不能为空：<input onChange={(el)=>this.handleRegular('testNull',el.target.value,'NullCorrect')}/>
                    </div>
                    <ReTips falseColor={"red"} trueColor={"green"} fontSize={"16px"} correct={NullCorrect} trueMessage={"输入正确"} falseMessage={"不能为空"}></ReTips>
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                    <img src={re}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>
            </Board>
            </div>
        )
    }
}
export {
    ReComponent
}