import { useEffect, useState } from "react"

interface TestProps
{
    str:string
}
function TestChildren(props:TestProps)
{
    const {str} = props

    return(
        <div>
            
            I am a ChildRen have Props {str}
        </div>
    )
}
export {
    TestChildren
}