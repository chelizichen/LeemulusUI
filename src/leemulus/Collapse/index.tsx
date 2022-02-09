import React,{ CSSProperties, useContext, useState } from "react"
import { NavLink } from "react-router-dom"
interface contextObject{
    active:number|Array<number>,
    toggleActive:Function,
    width:string
}
interface CollapseProps{
    border:boolean,
    defaultActive:number|Array<number>,
    children:React.PropsWithChildren<any>,
    width:string
}
interface CollapseItemProps{
    title:string,
    subtitle:string,
    name:number|Array<number>,
    children:React.PropsWithChildren<any>
}
interface CollapseItemCellProps{
    to:string,
    content:string,
    style:CSSProperties
}
const numberContext = React.createContext<contextObject>({} as any)
function Collapse(props:CollapseProps)
{
    const { border,defaultActive,width } = props
    const [active,setActive] = useState<number|Array<number>>(defaultActive)
    function toggleActive(activeName:number){
        setActive([activeName])
    }
    const borderStyle:React.CSSProperties = {
        border:'1px solid blue',
        width
    }
    const comStyle:React.CSSProperties = {
        width
    }
    console.log('re render');
    return(
        <>
            <div style={ border === true?borderStyle:comStyle}>
                <numberContext.Provider value={{active,toggleActive,width}}>
                    {props.children}
                </numberContext.Provider>
            </div>
        </>
    )
}

function CollapseItem(props:CollapseItemProps)
{
    // get default active value
    const {title,subtitle,name} = props
    const {active,toggleActive,width} = useContext<contextObject>(numberContext)
    const [currNode,setCurrNode] = useState<number|Array<number>>(active)
    const collapseItemStyle:React.CSSProperties = {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        width,
        borderBottom:'1px solid rgb(196 196 219)'
    }
    function changeIndex()
    {
        // judge is obj or number
        if(typeof active == 'number')
        {
            if(name !== currNode)
            {
                setCurrNode(name)
            }
            else
            {
                setCurrNode(-1)
            }
        }
        else if(typeof active == 'object')
        {
            toggleActive(name)
        }
    }
    function Children()
    {
        if(typeof active == 'number')
        {
            return Number(currNode) === Number(name)? props.children:''
        }
        else if(typeof active == 'object')
        {
            return active[0] === name?props.children:''
        }
    }
    return(
        <>
            <div style={collapseItemStyle} onClick={()=>changeIndex()}>
                <div style={{fontSize:'23px',fontWeight:'700',cursor:'pointer'}}>{title}</div>
                <div style={{fontSize:'18px',fontWeight:'700',cursor:'pointer'}}>{subtitle}</div>
            </div>
            <>
                {   Children()  }
            </>
        </>
    )
}
function CollapseItemCell(props:CollapseItemCellProps)
{
    const {content,to,style} = props
    const collapseItemCellStyle = {
        padding:'10px'
    }
    Object.assign(collapseItemCellStyle,style)
    // function href(address:string){
    //     if(to === undefined)
    //     {
    //         return
    //     }
    //     else
    //     {
    //         window.location.href = address
    //     }
    // }
    return(
        <>
            {/* <div style={collapseItemCellStyle} onClick={()=>href(to)}> */}
            <div style={collapseItemCellStyle}>
                {/* <div>{ content }</div> */}
                <NavLink to={to}> {content} </NavLink>
            </div>
        </>
    )
}
export {
    Collapse,
    CollapseItem,
    CollapseItemCell
}