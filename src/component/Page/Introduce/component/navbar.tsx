import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"
import { NavBar } from "../../../../leemulus/NavBar"
function INavbar()
{
    return(
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
        <Title title="NavBar">展示</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    import  {'{useLocation}'}  from react-router
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    {'<NavBar/>'}
                </div>
                <NavBar/>
            </Board>
            <Title title="功能">设计</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    没有 Props  纯展示 ，可显示路由，可点击跳转上一级
                </div>
            </Board>
        </div>
    )
}
export{
    INavbar
}