import { Board } from "../../../../leemulus/Board"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Slider } from "../../../../leemulus/Slider"
import { Title } from "../../../../leemulus/Title"
function ISlider()
{
    function linkToIntroduce()
    {
        window.location.href="/introduce"
    }

    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

        <Title title="Slider">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"defaultValue"} type={"number"} intro={"默认值"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"min"} type={"number"} intro={"最小值"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"max"} type={"number"} intro={"最大值"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"step"} type={"number"} intro={"步进值"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"changeValue"} type={"number"} intro={"触发值"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"bindChange"} type={"Function"} intro={"触发事件"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"style"} type={"React.CSSProperties"} intro={"样式"} defaultValue={"-"}></InnerDoc>
                
                </OutterDoc>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                    { `<Slider defaultValue={0} min={0} max={100} step={1} changeValue={95} bindChange={linkToIntroduce} style={{width:'200px'}}/> `}
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    效果：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <Slider defaultValue={0} min={0} max={100} step={1} changeValue={95} bindChange={linkToIntroduce} style={{width:'200px'}}/>
                </div>



            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    滑块, 滑动到某一值时触发事件
                </div>
            </Board>
        </div>
    )
}
export{
    ISlider
}