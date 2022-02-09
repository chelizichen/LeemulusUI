import { Board } from "../../../../leemulus/Board"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Title } from "../../../../leemulus/Title"
function IDocuments()
{
    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
            <Title title="OutterDoc">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"width"} type={"string"} intro={"宽度"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"height"} type={"string"} intro={"高度"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"padding"} type={"string"} intro={"内间距"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"radius"} type={"boolean"} intro={"是否显示圆角"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"ApiName"} type={"ReactChild"} intro={"ApiName"} defaultValue={"-"}></InnerDoc>                 
                    <InnerDoc name={"intro"} type={"string"} intro={"介绍"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"typeValue"} type={"string"} intro={"类型"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"defaultValue"} type={"string"} intro={"默认值"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"children"} type={"React.PropsWithChildren<any>"} intro={"子组件"} defaultValue={"-"}></InnerDoc>
                </OutterDoc>
            </Board>

            <Title title="InnerDoc">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"name"} type={"string"} intro={"PropsName"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"type"} type={"string"} intro={"类型"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"intro"} type={"string"} intro={"介绍"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"defaultValue"} type={"string"} intro={"默认值"} defaultValue={"-"}></InnerDoc>
                </OutterDoc>
            </Board>

            <Title title="功能">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    为方便自己写文档创建出来的组件，以上都是⬆️
                </div>
            </Board>
        </div>
    )
}
export{
    IDocuments
}