import { Board } from "../../../../leemulus/Board"
import { Collapse, CollapseItem, CollapseItemCell } from "../../../../leemulus/Collapse"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Title } from "../../../../leemulus/Title"
function ICollapse()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title  title="Tips">注意</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    此组件用到了 React-Router-Dom 库，若依赖中没有此包，路由跳转会失灵！
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    defaultActive 控制显示效果  
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    当 ValueType = Array[number] 时只展开一个
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    当 ValueType = number 时可全部展开
                </div>
            </Board>

            <Title  title="Collapse">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"border"} type={"string"} intro={"是否展示边框"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"width"} type={"string"} intro={"宽度"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"defaultActive"} type={"number|Array<number>"} intro={"默认展开"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"children"} type={"React.PropsWithChildren<any>"} intro={"子组件"} defaultValue={"-"}></InnerDoc>
                </OutterDoc>          
            </Board>
            <Title title="CollapseItem">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"title"} type={"string"} intro={"标题"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"subtitle"} type={"string"} intro={"副标题"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"name"} type={"number|Array<number>"} intro={"唯一索引值"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"children"} type={"React.PropsWithChildren<any>"} intro={"子组件"} defaultValue={"-"}></InnerDoc>
                </OutterDoc>            
            </Board>

            <Title title="CollapseItemCell">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"to"} type={"string"} intro={"路由跳转"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"content"} type={"string"} intro={"内容"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"style"} type={"CSSProperties"} intro={"样式"} defaultValue={"-"}></InnerDoc>
                </OutterDoc>
            </Board>


            <Title title="使用">样例</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    {'<Collapse border={false} defaultActive={0}  width={"100%"}>'}
                </div>
                <div style={{textIndent:'40px',marginBottom:'20px'}}>
                    {'<CollapseItem title={"# 前言"} subtitle={"介绍"} name={0}>'}
                </div>
                <div style={{textIndent:'60px',marginBottom:'20px'}}>
                    {'<CollapseItemCell to={"intro"} content={"简介"} style={{textAlign:"center"}}></CollapseItemCell>'}
                </div>
                <div style={{textIndent:'60px',marginBottom:'20px'}}>
                    {'<CollapseItemCell to={"use"} content={"使用"} style={{textAlign:"center"}}></CollapseItemCell>'}
                </div>
                <div style={{textIndent:'40px',marginBottom:'20px'}}>
                   
                    {'</CollapseItem>'}
                </div>
                <div style={{textIndent:'40px',marginBottom:'20px'}}>
                    {'<CollapseItem title={"# 开发"} subtitle={"过程"} name={0}>'}
                </div>
                <div style={{textIndent:'60px',marginBottom:'20px'}}>
                    {'<CollapseItemCell to={"log"} content={"日志"} style={{textAlign:"center"}}></CollapseItemCell>'}
                </div>
                <div style={{textIndent:'60px',marginBottom:'20px'}}>
                    {'<CollapseItemCell to={"version"} content={"版本"} style={{textAlign:"center"}}></CollapseItemCell>'}
                </div>
                <div style={{textIndent:'40px',marginBottom:'20px'}}>
                    {'</CollapseItem>'}
                    </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    {'</Collapse>'}
                </div>
            </Board>
            <Title title="功能 可全部展开">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                <Collapse border={false} defaultActive={0}  width={"100%"}>
                        <CollapseItem title={"# 前言"} subtitle={"介绍"} name={0}>
                            <CollapseItemCell to={"/introduce/intro"} content={"简介"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"/introduce/use"} content={"使用"} style={{textAlign:"center"}}></CollapseItemCell>
                        </CollapseItem>
                        <CollapseItem title={"# 开发"} subtitle={"过程"} name={0}>
                            <CollapseItemCell to={"/introduce/log"} content={"日志"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"/introduce/version"} content={"版本"} style={{textAlign:"center"}}></CollapseItemCell>
                        </CollapseItem>
                </Collapse>
                </div>
            </Board>

            <Title title="使用">样例</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    {'<Collapse border={false} defaultActive={[0]}  width={"100%"}>'}
                </div>
                <div style={{textIndent:'40px',marginBottom:'20px'}}>
                    {'<CollapseItem title={"# 前言"} subtitle={"介绍"} name={0}>'}
                </div>
                <div style={{textIndent:'60px',marginBottom:'20px'}}>
                    {'<CollapseItemCell to={"intro"} content={"简介"} style={{textAlign:"center"}}></CollapseItemCell>'}
                </div>
                <div style={{textIndent:'60px',marginBottom:'20px'}}>
                    {'<CollapseItemCell to={"use"} content={"使用"} style={{textAlign:"center"}}></CollapseItemCell>'}
                </div>
                <div style={{textIndent:'40px',marginBottom:'20px'}}>
                   
                    {'</CollapseItem>'}
                </div>
                <div style={{textIndent:'40px',marginBottom:'20px'}}>
                    {'<CollapseItem title={"# 开发"} subtitle={"过程"} name={0}>'}
                </div>
                <div style={{textIndent:'60px',marginBottom:'20px'}}>
                    {'<CollapseItemCell to={"log"} content={"日志"} style={{textAlign:"center"}}></CollapseItemCell>'}
                </div>
                <div style={{textIndent:'60px',marginBottom:'20px'}}>
                    {'<CollapseItemCell to={"version"} content={"版本"} style={{textAlign:"center"}}></CollapseItemCell>'}
                </div>
                <div style={{textIndent:'40px',marginBottom:'20px'}}>
                    {'</CollapseItem>'}
                    </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    {'</Collapse>'}
                </div>
            </Board>

            <Title title="功能 只可展开一个">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                <Collapse border={false} defaultActive={[0]}  width={"100%"}>
                        <CollapseItem title={"# 前言"} subtitle={"介绍"} name={0}>
                            <CollapseItemCell to={"/introduce/intro"} content={"简介"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"/introduce/use"} content={"使用"} style={{textAlign:"center"}}></CollapseItemCell>
                        </CollapseItem>
                        <CollapseItem title={"# 开发"} subtitle={"过程"} name={1}>
                            <CollapseItemCell to={"/introduce/log"} content={"日志"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"/introduce/version"} content={"版本"} style={{textAlign:"center"}}></CollapseItemCell>
                        </CollapseItem>
                </Collapse>
                </div>
            </Board>
        </div>
    )
}
export{
    ICollapse
}