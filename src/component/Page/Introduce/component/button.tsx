import { Board } from "../../../../leemulus/Board"
import { OutterDoc,InnerDoc } from "../../../../leemulus/Documents"
import { Title } from "../../../../leemulus/Title"
import { useState} from 'react'
import { Button } from "../../../../leemulus/Button";

function IButton()
{
    // const [loading,setLoading] = useState<boolean>(true);
    const [loading,setLoading] = useState<boolean>(false)
    function changeLoadingFunction()
    {
        setLoading(loading => loading ===true?false:true)
        console.log('123');
    }
    function changeLoadingPromise()
    {
        return new Promise((resolve,reject)=>{
            resolve('Promise 数据')
        }).then(data=>{
            setLoading(loading => loading ===true?false:true)
            console.log(data);
        }).catch(err=>{
            console.log(err);
            setLoading(loading => loading ===true?false:true)
        })
    }
    // changeLoadingPromise().then(data=>
    //     console.log(data)
    //     ).catch(err=>{
    //         console.log(err);
            
    //     })
    return (
        <div style={{width:'78%',marginLeft:'2%'}}>
        <Title title="Button">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <OutterDoc width={"80%"} height={'auto'} padding={'20px'} radius 
                    name={"参数名"} intro={"说明"} typeValue={"类型"}
                    defaultValue={"默认值"} ApiName={"# Props"} >
                    <InnerDoc name={"type"} type={"string"} intro={"按钮样式"} defaultValue={'"primary"|"info"|"danger"|"warning"'}></InnerDoc>
                    <InnerDoc name={"harline?"} type={"boolean"} intro={"边框显示"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"loading"} type={"boolean"} intro={"显示加载中的图案"} defaultValue={"false"}></InnerDoc>
                    <InnerDoc name={"onChange"} type={"Function|Promise"} intro={"点击事件"} defaultValue={"-"}></InnerDoc>
                    <InnerDoc name={"style?"} type={"Object:CssProperties"} intro={"样式"} defaultValue={"-"}></InnerDoc>
                
                </OutterDoc>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    使用
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    {'function changeLoadingPromise(){ return new Promise }'}
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    const loading = true
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    {'<Button loading={loading}  type="primary" onChange={changeLoadingPromise}> 普通 </Button>'}
                </div>    
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    效果： 
                </div>               
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'space-around',width:'500px'}}>
                    <Button loading={loading} type="primary" onChange={changeLoadingPromise} async>
                        主要
                    </Button>
             
                    <Button loading={loading} type="danger" onChange={changeLoadingPromise} disable>
                        危险
                    </Button>
                    <Button loading={loading} type="info" onChange={changeLoadingFunction}>
                        通用
                    </Button>
                    <Button loading={loading}  onChange={changeLoadingPromise}>
                        普通
                    </Button>
                </div>


            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    按钮组件 ，拥有一个点击事件（Promise｜Function），事件触发之后显示或取消Loading
                </div>
            </Board>
            <Title title="样式">定制</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    因为拥有 Object.assign() 方法，所以样式可以定制，可凭个人喜好定制 
                </div>
            </Board>
        </div>
    )
}
export {
    IButton
}