import React from "react"

interface BoardProps{
    backgroundColor?:string,
    style:React.CSSProperties,
    border:boolean,
    children:React.PropsWithChildren<any>
}
function Board(props:BoardProps)
{
    const {backgroundColor,border,style} = props
    const BoardStyle :React.CSSProperties= {
        backgroundColor:backgroundColor?backgroundColor:"rgb(246 249 249)",
        borderRadius:border?'10px':'',
    }
    Object.assign(BoardStyle,style)
    return(
        <div style={BoardStyle}>
            {props.children}
        </div>
    )
}
export {
    Board
}