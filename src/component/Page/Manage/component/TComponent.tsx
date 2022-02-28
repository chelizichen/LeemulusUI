import React from "react"

interface testProps{
    firstName:string,
    lastName?:string,
}
const  TComponent:React.FC<testProps> = ({lastName,firstName,children})=>(
        <div>
            <h1>hello world</h1>
            <h2>{ firstName } , { lastName }</h2>
            {children}
        </div>
)
TComponent.defaultProps = {
    firstName:'leemulus',
    lastName:'2019'
}
export {
    TComponent
}