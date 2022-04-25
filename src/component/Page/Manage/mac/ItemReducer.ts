import { TestChildren } from './testChildren'
import {WindowsView} from './windows'
import { nanoid } from 'nanoid'
import { TestChildrenNoProps } from './TestNoProps'
export interface initType
{
    // element:JSX.Element,
    width?:number,
    height?:number,
    id:string,
    children:any,
    props?:Object
}
export interface actionType {
    type:"ADD"|"SUB",
    children:any,
    width?:number,
    height?:number,
    id:string,
    props?:Object
}
const initState:initType[] = [
    // {id:'1',children:"千千阙歌",width:300,height:300},
    // {id:'2',children:TestChildrenNoProps,width:400,height:400},
    // {id:'3',children:TestChildren,width:400,height:400,props:{str:'testProps'}},

]

function ItemReducer(preState=initState,action:actionType)
{
    const {type,children,width,height,props} = action
    const id = nanoid()
    switch(type){
        case "ADD":
            return initState.push({id,children,width,height,props})
        default:{
            return initState
        }
    }
}
export {
    ItemReducer,
    initState,
}