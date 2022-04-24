import { useRef } from "react"
import { Button } from "../../../../leemulus/Button"
import '../index.css'
import { WindowsView } from "./windows"
interface ContainType{
    control:Function,
}
function Contain(props:ContainType)
{
    const { control } = props
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
            <div className="c_container">
                <div className="c_drag-bar">
                    <div className="w_red"></div>
                    <div className="w_yellow"></div>
                    <div className="w_green"></div>
                </div>
                <div className="c_content">
                    <Button loading={false} onChange={addWindows} type="primary">添加视图</Button>
                    内容：<input type="text"  ref={INP1} />
                    ID：<input type="text"  ref={INP2} />
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