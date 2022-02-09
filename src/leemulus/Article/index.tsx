import './index.css'
interface ArticleProps{
    src:string
    content:string,
    time:string
}
function Article(props:ArticleProps)
{
    const {src,content,time} = props
    return(
        <div className="exp_content">
            <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <img style={{width:'90%',height:'120px'}} alt="pic" src={src}/>
            </div>
            <div style={{textAlign:'center',fontSize:'23px',color:'rgb(84,84,131)',marginBottom:'5px'}}>{time}</div>
            <div style={{fontSize:'20px',textIndent:'40px',textAlign:"justify"}}>{content}</div>
        </div>
    )
}
export {
    Article
}