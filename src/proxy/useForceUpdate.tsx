import { useCallback, useState } from "react"

function UseForceUpdate()
{
    const [isUpdate,ForceUpdate] = useState(0);
    
    const update = useCallback(()=>{
        ForceUpdate((prev)=>prev+1)
    },[]);

    return update
}
export {
    UseForceUpdate
}