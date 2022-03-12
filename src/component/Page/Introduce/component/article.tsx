import { Article } from "../../../../leemulus/Article"
import { Board } from "../../../../leemulus/Board"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Title } from "../../../../leemulus/Title"
import item1 from '../../../../assets/item1.jpg'
function IArticle()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>
        <Title title="Article">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"src"} type={"string"} intro={"图片路径"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"content"} type={"string"} intro={"文档内容"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"time"} type={"string"} intro={"文档书写时间"} defaultValue={"-"}></InnerDoc>
                </OutterDoc>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                    import item from './assets/item.jpg' // 导入
                </div>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                    {'<'}Article src={'item'} content={"'正在实习前端，负责还原页面和增加动态效果，主要以原生JS为主。'"}  time={"'2021.4 - 2021.6'"} {`/>`}  
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    效果：
                </div>

                <Article src={item1} content={'正在实习前端，负责还原页面和增加动态效果，主要以原生JS为主。'} time={'2021.4 - 2021.6'} />


            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    没有设计，没有功能，纯展示组件～
                </div>
            </Board>
        </div>
    )
}
export{
    IArticle
}