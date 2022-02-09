import React, { CSSProperties, HtmlHTMLAttributes, useRef } from "react";

type TagType = "primary"|"danger"

interface TagProps{
    type:TagType,
    close:boolean,
    children:React.ReactChild,
    width:string,
    height:string,
}
function Tag(props:TagProps)
{
    const { type,close,width,height } = props
 
    const flexCenter = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

    const TagStyle:React.CSSProperties = {
        width,
        height,
        paddingLeft:'10px'
    }
    switch(type)
    {
        case 'primary':
            TagStyle.background="#cacaff"
            break;
        case 'danger':
            TagStyle.background="red"
            break;
        default:
            TagStyle.background="#cacaff"       
    }
    let tagRef = useRef<HTMLDivElement>({} as HTMLDivElement)

    function closeTag()
    {
        tagRef.current.style.opacity = "0"
    }

    function ChildRen()
    {
        if(close)
        {
            return(
                <div style={Object.assign(TagStyle,flexCenter)} ref={tagRef}>
                    {props.children}
                    <div style={{marginLeft:'10px',marginRight:'10px'}} onClick={closeTag}>
                        &gt;&gt;
                    </div>
                </div> 
            )    
        }
        else
        {
            return(
                <div style={Object.assign(TagStyle,flexCenter)}>
                    {props.children}
                </div> 
            )   
        }
    }
    return (
        <div>
            {ChildRen()}
        </div>
    )
}

export {
    Tag
}