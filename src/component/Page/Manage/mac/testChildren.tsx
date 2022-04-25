interface TestProps
{
    str:string
}
function TestChildren(props:TestProps)
{
    const {str} = props
    return(
        <div>
            I am a ChildRen {str}
        </div>
    )
}
export {
    TestChildren
}