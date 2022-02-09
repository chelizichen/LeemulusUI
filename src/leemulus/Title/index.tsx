import { ReactChild } from "react";
import { Tag } from "../Tag";

interface TitleProps{
    title:string,
    children:ReactChild
}
function Title(props:TitleProps)
{
    const {title} = props
    return(
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid #c8c8e3',paddingBottom:'10px'}}>
                <div style={{fontSize:'23px',fontWeight:'900'}}># { title }</div> 
                <Tag type="primary" close width="auto" height="40px">{props.children}</Tag>
        </div>
    )
}
export {
    Title
}