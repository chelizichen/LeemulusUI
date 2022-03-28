import { CSSProperties, useMemo } from "react"

interface ReTipsProps
{
    correct:boolean,
    falseColor:string,
    trueColor:string,
    backgroundColor?:string,
    fontSize:string,
    style?:React.CSSProperties,
    trueMessage:string,
    falseMessage:string
}
function ReTips(props:ReTipsProps)
{
    const {falseColor,trueColor,backgroundColor,fontSize,style,correct,trueMessage,falseMessage}= props
    const ReTipsStyle:CSSProperties = useMemo(()=>{
        return{
            backgroundColor,
            fontSize,
            color:correct === true?trueColor:falseColor,
        }
    },[correct,falseColor,trueColor,backgroundColor,fontSize])
    Object.assign(ReTipsStyle,style)
    return(
        <div>
            <div style={ReTipsStyle}>{correct === true?trueMessage:falseMessage }</div>
        </div>
    )
}
export {
    ReTips
}