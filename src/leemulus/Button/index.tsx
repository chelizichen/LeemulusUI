import React, { CSSProperties } from 'react';
import './index.css'
type ButtonType = "primary"|"info"|"danger"|"warning"
interface ButtonProps{
    type?:ButtonType,
    harline?:boolean,
    loading:boolean,
    onChange:Function | (()=>Promise<any>),
    async?:boolean,
    disable?:boolean,
    style?:CSSProperties
    // onChange:()=>Promise<any>

    children:React.ReactChild
}
function Button(props:ButtonProps)
{
    const  {type,harline,loading,onChange,disable,style} = props
    function ChangeLoading()
    {
       onChange()
    }
    const ButtonStyle:React.CSSProperties = {
        width:'90px',
        height:'40px',
        padding:'5px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        cursor:'pointer'
    }
    if(harline)
    {
        ButtonStyle.border = '0.5px solid gray'
    }
    if(disable)
    {
        ButtonStyle.cursor = 'no-drop'
    }
    switch(type)
    {
        case 'primary':
            ButtonStyle.background = 'rgb(127 211 167)';
            break;
        case 'info':
            ButtonStyle.background = '#1989fa';
            break;
        case 'danger':
            ButtonStyle.background = '#ee0a24';
            break
        case 'warning':
            ButtonStyle.background = 'orange'
            break;
        default:
            ButtonStyle.background = 'white';
            ButtonStyle.border = '0.5px solid gray'
            break;
    }
    Object.assign(ButtonStyle,style)
    return(
        <>
            <button style={ButtonStyle} onClick={disable?undefined:ChangeLoading}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{props.children}</div>
                <div className={loading === true?'loading':''} style={{marginLeft:loading === true?'20px':''}}></div>                
            </button> 
        </>
    )
}

export {
    Button
}