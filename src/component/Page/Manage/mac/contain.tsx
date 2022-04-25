import { useEffect, useRef } from "react"
import { Button } from "../../../../leemulus/Button"
import '../index.css'
import { WindowsView } from "./windows"
interface ContainType{
    control:Function,
}
function Contain(props:ContainType)
{
    const { control } = props

    function onDrag(e:any){
        let oddStyle =  window.getComputedStyle(container.current)
        let left = parseFloat(oddStyle.left)
        let top = parseFloat(oddStyle.top)
        container.current.style.left = `${left+e.movementX}px`
        container.current.style.top = `${top+e.movementY}px`
    }
    let container = useRef({} as HTMLDivElement)
    let dragger = useRef({} as HTMLDivElement)
    useEffect(()=>{
        dragger.current.addEventListener("mousedown",()=>{
            document.addEventListener("mousemove",onDrag)
            document.addEventListener("mouseup",()=>{
                document.removeEventListener("mousemove",onDrag)
            })
        })
    },[])

    const INP1 = useRef({} as HTMLInputElement)
    const INP2 = useRef({} as HTMLInputElement)
    const INP3 = useRef({} as HTMLInputElement)
    const INP4 = useRef({} as HTMLInputElement)

    function addWindows()
    {
        control({type:"ADD",children:INP1.current.value,width:INP3.current.value,height:INP4.current.value})
    }
    return(
        <div>
            <div className="c_container" ref={container}>
                <div className="c_drag-bar" ref={dragger}>
                    <div className="w_red"></div>
                    <div className="w_yellow"></div>
                    <div className="w_green"></div>
                </div>
                <div className="c_content">
                    <Button loading={false} onChange={addWindows} type="primary">添加视图</Button>
                    内容：<input type="text"  ref={INP1} />
                    宽度：<input type="text"  ref={INP3} />
                    高度：<input type="text"  ref={INP4} />

                </div>
            </div>
        </div>
    )
}
export {
    Contain
}