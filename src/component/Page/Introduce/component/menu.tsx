import { Board } from "../../../../leemulus/Board"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Menu, MenuItem } from "../../../../leemulus/Menu"
import { Title } from "../../../../leemulus/Title"
function IMenu()
{
    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
            <Title title="Menu">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"fold"} type={"boolean"} intro={"是否展开"} defaultValue={"false"}></InnerDoc>
                    <InnerDoc name={"title"} type={"string"} intro={"标题"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"children"} type={"React.PropsWithChildren<any>"} intro={"子组件"} defaultValue={"-"}></InnerDoc>
                </OutterDoc>
            </Board>
            <Title title="MenuItem">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"value"} type={"stringa"} intro={"值"} defaultValue={"false"}></InnerDoc>
                    <InnerDoc name={"checked"} type={"boolean"} intro={"选中"} defaultValue={"-"}></InnerDoc>
                </OutterDoc>    
            </Board>

            <Title title="显示">效果：</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <Menu fold={false} title="总选项">
                    <MenuItem value="选项1" checked={true}/>
                    <MenuItem value="选项2" checked={false}/>
                    <MenuItem value="选项3" checked={false}/>
                </Menu>
            </Board>

            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    展示可选列表Menu List
                </div>
            </Board>
        </div>
    )
}
export{
    IMenu
}