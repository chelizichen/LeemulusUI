import { Board } from "../../../../leemulus/Board"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Switch } from "../../../../leemulus/Switch"
import { Tag } from "../../../../leemulus/Tag";
import { Title } from "../../../../leemulus/Title"
function ITag()
{
    function sayHello()
    {
        console.log('hello world');
    }

    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
        <Title title="Switch">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"type"} type={"TagType"} intro={"类型"} defaultValue={"primary - danger"}></InnerDoc>
                    <InnerDoc name={"close"} type={"boolean"} intro={"是否可以关闭"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"width"} type={"string"} intro={"宽"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"height"} type={"string"} intro={"高"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"children"} type={"React.ReactChild"} intro={"子组件"} defaultValue={"-"}></InnerDoc>

                </OutterDoc>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                    { `<Tag type={"primary"} close={false} width={"400px"} height={"20px"} >HELLO</Tag>`}
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                    { ` <Tag type={"danger"} close={true} width={"400px"} height={"20px"} >HELLO</Tag>`}
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    效果：
                </div>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <Tag type={"primary"} close={false} width={"400px"} height={"20px"} >HELLO</Tag>
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <Tag type={"danger"} close={true} width={"400px"} height={"20px"} >HELLO</Tag>
                </div>

            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    展示组件 当 close = true 时 可以点击关闭
                </div>
            </Board>
        </div>
    )
}
export{
    ITag
}