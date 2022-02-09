const list = [
    { 
        src:' test  list  url one ',
        title:' test list title one '
    },
    { 
        src:' test  list  url two ',
        title:' test list title two '
    },
    { 
        src:' test  list  url three ',
        title:' test list title three '
    }
]

export default function App()
{
    return(
        <div>
            <h1> Hello Sandbox </h1>
            {
                list.map((el,index)=>{
                    return(
                        <CardList {...el} key={index}></CardList>
                    )
                })
            }
            <CardList {...list}></CardList>
        </div>
    )
}

function CardList({src,title})
{
    const srcStyle = {
        color:'blue',
        fontSize:'20px'
    }
    const titleStyle = {
        fontSize:'18px'
    }
    return <>
        <div>
            <div style={srcStyle}>{src}</div>
            <div style={titleStyle}>{title}</div>
        </div>
    </>
}

function DraggableList()
{

}

function Draggable()
{

}

function Bar()
{
    
}