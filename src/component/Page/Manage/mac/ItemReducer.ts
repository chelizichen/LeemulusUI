import { TestChildren } from './testChildren'
import {WindowsView} from './windows'
export interface initType
{
    // element:JSX.Element,
    width?:number,
    height?:number,
    id:number,
    children:any,
}
export interface actionType {
    type:"ADD"|"SUB",
    children:any,
    width?:number,
    height?:number,
    id:number
}
const initState:initType[] = [
    {id:1,children:"千千阙歌",width:300,height:300},
    {id:2,children:TestChildren,width:400,height:400}
]

function ItemReducer(preState=initState,action:actionType)
{
    const {type,children,width,height,id} = action
    switch(type){
        case "ADD":
            return initState.push({id,children,width,height})
        default:{
            return initState
        }
    }
}
export {
    ItemReducer,
    initState,
}