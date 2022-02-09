import { Routes,Route } from "react-router-dom"
import { Board } from "../../../leemulus/Board"
import { Intro } from "./component/intro"
import { Collapse, CollapseItem, CollapseItemCell } from "../../../leemulus/Collapse"
import { Use } from "./component/use"
import { Log } from "./component/log"
import { Version } from './component/version'
import { IArticle } from "./component/article"
import { IBoard } from "./component/board"
import { IButton } from "./component/button"
import { ICell } from "./component/cell"
import { ICollapse } from "./component/collapse"
import { IDocuments } from "./component/documents"
import { ILoading } from "./component/loading"
import { IMenu } from "./component/menu"

function Introduce()
{
    return(
        <div style={{display:'flex',marginTop:'20px'}}>
            <Board style={{width:'20%',padding:'10px'}} border>
                <Collapse border={false} defaultActive={0}  width={"100%"}>
                        <CollapseItem title={"# 前言"} subtitle={"介绍"} name={0}>
                            <CollapseItemCell to={"intro"} content={"简介"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"use"} content={"使用"} style={{textAlign:"center"}}></CollapseItemCell>
                        </CollapseItem>
                        <CollapseItem title={"# 开发"} subtitle={"过程"} name={0}>
                            <CollapseItemCell to={"log"} content={"日志"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"version"} content={"版本"} style={{textAlign:"center"}}></CollapseItemCell>
                        </CollapseItem>
                        <CollapseItem title={"# 组件"} subtitle={"介绍"} name={0}>
                            <CollapseItemCell to={"article"} content={"Article"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"board"} content={"Board"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"button"} content={"Button"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"cell"} content={"Cell"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"collapse"} content={"Collapse"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"documents"} content={"Documents"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"loading"} content={"Loading"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"menu"} content={"Menu"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"navbar"} content={"Navbar"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"popup"} content={"Popup"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"progress"} content={"Progress"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"slider"} content={"Slider"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"switch"} content={"Switch"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"tag"} content={"Tag"} style={{textAlign:"center"}}></CollapseItemCell>
                            <CollapseItemCell to={"title"} content={"Title"} style={{textAlign:"center"}}></CollapseItemCell>
                        
                        </CollapseItem>
                </Collapse>
            </Board>
            <Routes>
                <Route path="intro" element={<Intro/>}></Route>
                <Route path="use" element={<Use/>}></Route>
                <Route path="log" element={<Log/>}></Route>
                <Route path="version" element={<Version/>}></Route>
                <Route path="article" element={<IArticle/>}></Route>
                <Route path="board" element={<IBoard/>}></Route>
                <Route path="button" element={<IButton/>}></Route>
                <Route path="cell" element={<ICell/>}></Route>
                <Route path="collapse" element={<ICollapse/>}></Route>
                <Route path="documents" element={<IDocuments/>}></Route>
                <Route path="loading" element={<ILoading/>}></Route>
                <Route path="menu" element={<IMenu/>}></Route>


            </Routes>
        </div>
    )
}
export {
    Introduce
}
