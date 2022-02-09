import React from "react";

interface CellProps{
    padding:string,
    title:string,
    width:string,
    height:string,
    children:React.ReactChild
}
function Cell(props:CellProps)
{
    const {padding,title,width,height} = props
    const CellStyles = {
        padding,
        width,
        height,
        backgroundColor:'#f5f6f8',
        border:'1px solid rgb(199 212 241)',
        margin:'2px'
    }
    const flexStyles={
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    }
    return(
        <div style={Object.assign(CellStyles,flexStyles)}>
                <div>{title}</div>
                {   props.children  }
        </div>
    )
}

export {
    Cell
}