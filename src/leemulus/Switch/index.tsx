import { useState } from 'react'
import './index.css'
interface SwichProps
{
    defaultChecked:boolean
    bindChange:Function
}
function Switch(props:SwichProps)
{
    const {defaultChecked,bindChange} = props
    const [isChecked,setIsChecked] = useState(defaultChecked)
    function onClick()
    {
        setIsChecked(isChecked===true?false:true)
        console.log(isChecked);
        bindChange()
    }

    return(
        <>
            <input type="checkbox" className="switch"   checked={isChecked} onChange={onClick}/>
        </>
    )
}

export {
    Switch
}