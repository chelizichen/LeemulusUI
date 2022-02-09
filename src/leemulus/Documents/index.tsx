const flexSpaceBetweenStyle:React.CSSProperties={
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
}
interface InnerDocProps{
    name:string
    type:string
    intro:string
    defaultValue:string
}
interface OutterDocProps
{
    width:string,
    height:string,
    padding:string,
    radius:boolean,
    ApiName:string,
    name:string,
    intro:string,
    typeValue:string,
    defaultValue:string,
    children:React.PropsWithChildren<any>
}
function InnerDoc(props:InnerDocProps)
{
    const { name,type,intro,defaultValue} = props
    const innerStyle={
        width:'50%',padding:'5px 20px'
    }
    return(
        <div style={flexSpaceBetweenStyle}>
            <div style={Object.assign(innerStyle,flexSpaceBetweenStyle)}>
                <div>{name}</div>
                <div>{intro}</div>
            </div>
            <div style={innerStyle}>
                <div>{type}</div>
                <div>{defaultValue}</div>
            </div>
        </div>
    )
}

function OutterDoc(props:OutterDocProps)
{
    const {width,height,padding,radius,ApiName,name,intro,typeValue,defaultValue} = props
    const OutterStyle:React.CSSProperties ={
        width,
        height,
        padding,
        backgroundColor:'#f2f3f4'
    }
    const FontStyle ={
        fontSize:'20px',
        fontWeight:'900'
    }
    if(radius)
    {
        OutterStyle.borderRadius = "20px"
    }
    const innerStyle={
        width:'50%',padding:'5px 20px'
    }

    return(
        <div style={OutterStyle}>
            <div style={{fontSize:'23px',fontWeight:700}}>
                {ApiName}
            </div>
            <div style={Object.assign(FontStyle,flexSpaceBetweenStyle)}>
                <div style={Object.assign(innerStyle,flexSpaceBetweenStyle)}>
                    <div>{name}</div>
                    <div>{intro}</div>
                </div>
                <div style={Object.assign(innerStyle,flexSpaceBetweenStyle)}>
                    <div>{typeValue}</div>
                    <div>{defaultValue}</div>
                </div>
            </div>
            {props.children}
        </div>
    )
}
export {
    InnerDoc,
    OutterDoc,
}