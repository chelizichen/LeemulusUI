import { useState } from "react"
import { Board } from "../../../../leemulus/Board"
import { Button } from "../../../../leemulus/Button"
import { InnerDoc, OutterDoc } from "../../../../leemulus/Documents"
import { Popup } from "../../../../leemulus/Popup"
import { Title } from "../../../../leemulus/Title"
function IPopup()
{
    const [isShow,setShow] = useState<boolean>(false)
    function changeShow()
    {
        setShow(isShow=> isShow ===true?false:true)
    }

    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

        <Title title="Cell">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                     defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"padding"} type={"string"} intro={"内间距"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"title"} type={"string"} intro={"标题"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"width"} type={"string"} intro={"宽度"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"height"} type={"string"} intro={"高度"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"children"} type={"ReactChild"} intro={"内容"} defaultValue={"-"}></InnerDoc>
                
                </OutterDoc>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用：
                </div>
                
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px'}}>
                    {'<Cell padding={"5px"} title="@ 13476973442"  width={"400px"} height={"30px"}>电话&微信</Cell>'}
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    效果：
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <Popup isShow={isShow} content="遮罩层内容"/>
                    <Button onChange={changeShow} loading={false}>
                        按钮
                    </Button>

                </div>



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
    IPopup
}