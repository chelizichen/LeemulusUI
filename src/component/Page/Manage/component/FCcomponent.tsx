import React from "react"

interface testProps{
    firstName:string,
    lastName?:string,
}
// 不用显示的申明 children
const  FCComponent:React.FC<testProps> = ({lastName,firstName,children})=>{
    return(
        <div>
            <h1>hello world</h1>
            <h2>{ firstName } , { lastName }</h2>
            {children}
        </div>
    )
}

FCComponent.defaultProps = {
    firstName:'leemulus',
    lastName:'2019'
}
export {
    FCComponent,
}