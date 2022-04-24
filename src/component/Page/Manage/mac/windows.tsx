import { CSSProperties, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import '../index.css'

interface windowProps
{
    width?:number,
    height?:number,
    children?:React.ReactChild
}
function WindowsView(props:windowProps)
{
    let container = useRef({} as HTMLDivElement)
    let dragger = useRef({} as HTMLDivElement)
    const { width,height,children } = props
    const containerStyle:CSSProperties = 
    {
        width: width===undefined?'400px':`${width}px`,
        height: height===undefined?'400px':`${height}px`,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    }
    const dragBarStyle:CSSProperties ={
            width: '100%',
            height: '30px',
            backgroundColor: '#d8dadb',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start'
    }
    const contentStyle:CSSProperties={
            width:'100%',
            height: height===undefined?'370px':`${height-30}px`,
            backgroundColor: '#f1f3f4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
    }
    useEffect(()=>{
        dragger.current.addEventListener("mousedown",()=>{
            document.addEventListener("mousemove",onDrag)
            document.addEventListener("mouseup",()=>{
                document.removeEventListener("mousemove",onDrag)
            })
        })
    },[])
    function onDrag(e:any){
        let oddStyle =  window.getComputedStyle(container.current)
        let left = parseFloat(oddStyle.left)
        let top = parseFloat(oddStyle.top)
        container.current.style.left = `${left+e.movementX}px`
        container.current.style.top = `${top+e.movementY}px`
    }
    function removeItem(e:any)
    {
        container.current.remove()   
    }
    return(
        // onDrag={dragWindow}
        <>
            <div style={containerStyle} ref={container}>
                <div style={dragBarStyle} ref={dragger}>
                    <div className="w_red" onClick={removeItem}></div>
                    <div className="w_yellow"></div>
                    <div className="w_green"></div>
                </div>
                <div style={contentStyle}>
                    {
                        children
                    }
                </div>
            </div>
        </>
    )
}
export {
    WindowsView
}

