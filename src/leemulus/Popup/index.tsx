interface Popup{
    isShow:boolean,
    content:string
}
function Popup(props:Popup)
{
    const {isShow,content } = props
    const RootNode:any = document.getElementById('root')
    const PopNode:any = document.getElementById('PopUpNode')

    if(isShow)
    {
        if(PopNode === null)
        {
            const PopNode:HTMLElement = document.createElement('div')
            PopNode.setAttribute('id','PopUpNode')
            RootNode.appendChild(PopNode)
            const BroNode = RootNode.children[0]
                
            BroNode.style.opacity = '50%'
            BroNode.style.position = 'relative'
            PopNode.style.position = 'absolute'
            PopNode.style.top = '50%'
            PopNode.style.left = '50%'
            PopNode.style.cursor = 'pointer'
            PopNode.style.zIndex = '999'
            PopNode.innerHTML = content
    
            PopNode.onclick = function()
            {
                RootNode.removeChild(PopNode)
                const BroNode = RootNode.children[0]
                BroNode.style.opacity = '100%'
            }
        }
    }

    return(
        <div>
        </div>
    )
}
export {
    Popup
}