import { CSSProperties, useState } from 'react'
import { Button } from '../../../../leemulus/Button'
import '../index.css'
import { Contain } from './contain'
import { TestChildren } from './testChildren'
import { TestChildrenNoProps } from './TestNoProps'
interface BottomProps
{
    control:Function,
}
function BottomBar(props:BottomProps)
{
    const { control } = props
    function addApp()
    {
        control({type:"ADD",children:TestChildren,props:{str:'123'}})
    } 
    function addText()
    {
        control({type:"ADD",children:TestChildrenNoProps})
    } 
    function addEditor()
    {
        control({type:"ADD",children:Contain,props:{control}})
    } 
    const ButtonStyle:CSSProperties={
        height:'40px',
        width:'40px',
        borderRadius:'50%',
        marginRight:"10px"
    }  
    return(
        <div className="b_bar">
            <Button loading={false} onChange={addApp} style={ButtonStyle}>App</Button>
            <Button loading={false} onChange={addText} style={ButtonStyle}>Text</Button>
            {/* <Button loading={false} onChange={addEditor} style={ButtonStyle}>Editor</Button> */}

        </div>
    )
}
export {
    BottomBar
}