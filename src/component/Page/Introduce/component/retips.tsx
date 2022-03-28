import { Board } from "../../../../leemulus/Board"
import { OutterDoc,InnerDoc } from "../../../../leemulus/Documents"
import { Title } from "../../../../leemulus/Title"
import re from "../../../../assets/code/re.png"
import re1 from "../../../../assets/code/re1.png"

//     correct:boolean,
//     falseColor:string,
//     trueColor:string,
//     backgroundColor?:string,
//     fontSize:string,
//     style?:React.CSSProperties,
//     trueMessage:string,
//     falseMessage:string
function IReTips()
{

    return (
        <div style={{width:'78%',marginLeft:'2%'}}>
            <Title title="ReTips">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                    defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"correct"} type={"boolean"} intro={"正则表达式是否测试正确"} defaultValue={'false'}></InnerDoc>
                    <InnerDoc name={"falseColor?"} type={"string"} intro={"正则错误时字体颜色"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"trueColor"} type={"boolstringean"} intro={"正则成功时字体颜色"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"backgroundColor"} type={"string"} intro={"背景颜色"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"fontSize"} type={"string"} intro={"字体大小"} defaultValue={"16px"}></InnerDoc>
                    <InnerDoc name={"style?"} type={"Object:CssProperties"} intro={"样式"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"trueMessage"} type={"string"} intro={"正则正确时显示字体"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"falseMessage"} type={"string"} intro={"正则失败时显示字体"} defaultValue={"-"}></InnerDoc>
                
                </OutterDoc>
            </Board>
            <Title title="ReTips">使用</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <img src={re}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <img src={re1}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>
            </Board>
        </div>
    )
}
export{
    IReTips
}