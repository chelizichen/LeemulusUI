import { Board } from "../../../../leemulus/Board"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Menu, MenuItem } from "../../../../leemulus/Menu"
import { Title } from "../../../../leemulus/Title"
function IMenu()
{
    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
        <Title title="Article">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"load"} type={"string"} intro={"是否显示"} defaultValue={"false"}></InnerDoc>
                    <InnerDoc name={"bindLoad"} type={"Function"} intro={"绑定函数"} defaultValue={"-"}></InnerDoc>
                </OutterDoc>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    效果：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                <Menu fold={false} title="总选项">
                    <MenuItem value="选项1" checked={true}/>
                    <MenuItem value="选项2" checked={false}/>
                    <MenuItem value="选项3" checked={false}/>
                </Menu>

                </div>



            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    bindLoad 控制 Loading 组件的展示
                </div>
            </Board>
        </div>
    )
}
export{
    IMenu
}