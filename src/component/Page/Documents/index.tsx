import { memo, useEffect, useState } from "react"
import { Route, Routes } from "react-router";
import { Board } from "../../../leemulus/Board";
import { Collapse, CollapseItem, CollapseItemCell } from "../../../leemulus/Collapse";
import { AxiosComponent } from "./component/axios";
import { LocalStorageComponent } from "./component/loaclStorage";
import { Presicion } from "./component/presicion";
import { SessionStorageComponent } from "./component/sessionStorage";

function Documents()
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
                        <CollapseItemCell to={"axios"} content={"Axios"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={"localstorage"} content={"Localstorage"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={"sessionstorage"} content={"Sessionstorage"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={"presicion"} content={"Presicion"} style={{textAlign:"center"}}></CollapseItemCell>

                    </CollapseItem>
            </Collapse>
        </Board>
        <Routes>
            <Route path="axios" element={<AxiosComponent/>}></Route>
            <Route path="localstorage" element={<LocalStorageComponent/>}></Route>
            <Route path="sessionstorage" element={<SessionStorageComponent/>}></Route>
            <Route path="presicion" element={<Presicion/>}></Route>

        </Routes>
    </div>
    )
}
memo(Documents)
export {
    Documents
}