interface Popup{
    isShow:boolean,
    content:string
}
function Popup(props:Popup)
{
    const {isShow,content } = props
    const RootNode:any = document.getElementById('root')
    const PopNode:any = document.getElementById('PopUpNode')

    if(PopNode === null)
    {
        const PopNode:any = document.createElement('div')
        PopNode.setAttribute('id','PopUpNode')
        RootNode.appendChild(PopNode)
        const BroNode = RootNode.children[0]
        console.log('BroNode',BroNode);
        BroNode.style.opacity = '50%'
        BroNode.style.position = 'relative'
        PopNode.style.position = 'absolute'
        PopNode.style.top = '50%'
        PopNode.style.left = '50%'
        PopNode.innerHTML = content
    }else{
        const BroNode = RootNode.children[0]
        BroNode.style.opacity = '100%'
        RootNode.removeChild(PopNode)
    }

    return(
        <div>
        </div>
    )
}
export {
    Popup
}