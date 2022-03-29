import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"
import { deepCopy } from "../../../../proxy/copy"
import deepcopy from "../../../../assets/code/deepcopy.png"
import deepcopy1 from "../../../../assets/code/deepcopy1.png"

function DeepCopyComponent()
{
    let oldObject = {
        a:1,
        b:{
            c:2,
            d:([
                3,
                {e:4}
            ]) as any
        }
    }
    let newObject:typeof oldObject = deepCopy(oldObject)
    
    newObject.b.c = 3
    newObject.b.d[1].e = 5
    newObject.b.d[0] = 1

    console.log(oldObject);
    console.log(newObject);

    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="拷贝">简介</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    深拷贝：拷贝返回一个新对象，新的引用，与引用对象相同的值（key:value)
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    浅拷贝：拷贝的是引用对象的地址 （key:value)
                </div>
            </Board>
            <Title title="拷贝">代码</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <img src={deepcopy}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    Tips:在使用TypeScript 时为了更好的类型推断 可以在拷贝出来的对象上增加类型 typeof OldObject
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',fontWeight:900}}>
                    <img src={deepcopy1}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
                </div>
            </Board>

        </div>
    )
}
export {
    DeepCopyComponent
}