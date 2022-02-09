
import './index.css'
interface LoadingProps{
    load?:boolean
    bindLoad:Function
}
function Loading(props:LoadingProps)
{
    const {load,bindLoad} = props
    bindLoad()
    if(load)
    {
        return <div className="loading"></div>
    }
    else
    {
        return <div className="loading" style={{opacity:'0'}}></div>
    }
}

export {
    Loading
}