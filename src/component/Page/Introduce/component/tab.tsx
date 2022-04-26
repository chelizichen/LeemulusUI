import { Board } from "../../../../leemulus/Board"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Title } from "../../../../leemulus/Title"
import TabPic from '../../../../assets/code/tab.png'
import { SpecialWindowsView } from "./speicalWindow"
function ITab()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

        <Title title="Tab Vue">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"tableData"} type={"Array"} intro={"传入数组"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"initialIndex"} type={"number"} intro={"传入默认下惨"} defaultValue={"-"}></InnerDoc>

                </OutterDoc>
            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <SpecialWindowsView>
                    <img src={TabPic} alt="" style={{width:'100%',height:'100%'}}></img>
                </SpecialWindowsView>
            </Board>
        </div>
    )
}
export{
    ITab
}