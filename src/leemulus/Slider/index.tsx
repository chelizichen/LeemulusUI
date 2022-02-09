import { useRef,useState } from "react"
interface SliderProps
{
    defaultValue:number,
    min:number,
    max:number,
    step:number,
    changeValue:number,
    bindChange:Function,
    style:React.CSSProperties
}
function Slider(props:SliderProps)
{
    const { defaultValue,min,max,step,changeValue,bindChange,style } = props
    const SliderStyle = {
        cursor:'pointer'
        // color:'red'
    }
    Object.assign(SliderStyle,style)
    
    const InputRef = useRef({} as any)
    let [value,setValue] = useState<number>(defaultValue)

    function changeCurrValue()
    {
        setValue( InputRef.current.value )
        if(changeValue <= value )
        {
            console.log('bindchange 触发');
            bindChange()
        }
    }
    
    return(
        <>
            <input ref={InputRef} type="range" defaultValue={defaultValue} min={min} max={max} step={step} style={SliderStyle} onChange={changeCurrValue}  />
        </>
    )
}

export {
    Slider
}