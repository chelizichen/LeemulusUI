import React,{ ReactElement, useContext, useState } from "react"

const flexCenterSpaceBetween:React.CSSProperties = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
}

interface MenuProps{
    fold:boolean,
    title:string,
    children:React.ReactChild
}
interface MenuItemProps
{
    value:string,
    checked:boolean
}
const CheckedAll = React.createContext<boolean>({} as any)

function Menu(props:MenuProps)
{
    const {fold,title} = props
    const [isFold,setIsFold] = useState<boolean>(fold)

    const MenuStyle={
        width:'300px'
    }
    const disPlayStyle = {
        display:isFold === true?"block":"none"
    }
    // 默认为  子选项为 false 
    const [isCheckedAll,setCheckedAll] = useState<boolean>(false)
    return(
        <div style={MenuStyle}>
            <div style={flexCenterSpaceBetween}>
                <div onClick={()=>setIsFold(isFold=>isFold === true?false:true)}>{title}</div>
                <div onClick={()=>setCheckedAll(isCheckAll=>isCheckAll === true?false:true)}>全选</div>
            </div>
            <div style={disPlayStyle}>
                <CheckedAll.Provider value={isCheckedAll}>
                    {props.children}
                </CheckedAll.Provider>
            </div>
        </div>
    )
}

function MenuItem(props:MenuItemProps)
{
    const { value,checked } = props
    // context 
    const isCheckedAll = useContext(CheckedAll)
    console.log(isCheckedAll);
    // set prop 
    // const [isChecked,setChecked] = useState(checked)

    function CheckedComponent():ReactElement
    {
        if(isCheckedAll === true)
        {
            return(
                <div style={flexCenterSpaceBetween}>
                    <div>{value}</div>
                    <div>选中</div>
                </div>
            )
        }
        else
        {
            return(
                <div style={flexCenterSpaceBetween}>
                    <div>{value}</div>
                    <div style={{display:checked===true?"block":"none"}}>选中</div>
                </div>
            )
        }
    }

    return(
        CheckedComponent()
    )
}
export {
    Menu,
    MenuItem
}