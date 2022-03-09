import { useEffect, useState } from "react";
import { useHref, useLocation } from "react-router";
const flexCenter:React.CSSProperties= {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}

interface NavBarProps{
    children?:React.ReactChild
}
function NavBar(props:NavBarProps)
{
    const {pathname} = useLocation()
    const NavBarStyle={
        width:'200px'
    }
    const [currPathName,SetPathName] = useState<string>(pathname)

    useEffect(()=>{
        SetPathName(pathname)
    },[pathname])
    const LocationArray = currPathName.split("/")

    function HrefTo(index:any)
    {        
        window.location.href = getCurrIndex(index)
    }

    function getCurrIndex(index:any)
    {
        let currPath = ''
        for(let i = 0;i<=index;i++)
        {
            currPath += LocationArray[i]+"/"
        }
        return currPath
    }
    return(
        <div style={Object.assign(NavBarStyle,flexCenter)}>
            {
                LocationArray.map( (el,index) =>{
                    return <div style={{cursor:'pointer',textDecorationLine:'underline'}} key={index} onClick={()=>HrefTo(index)}> {el}&nbsp;</div>
                })
            }
            &nbsp;
            {props.children}
        </div>
    )
}
export {
    NavBar
}