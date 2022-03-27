import { memo, useEffect, useRef, useState } from "react"
import { Route, Routes, useHref, useLocation } from "react-router";
import { Board } from "../../../leemulus/Board";
import { Collapse, CollapseItem, CollapseItemCell } from "../../../leemulus/Collapse";
import { AxiosComponent } from "./component/axios";
import { TestCallBack } from "./component/callback";
import { ContextDemo } from "./component/context";
import { DecoratorDemo } from "./component/decorator";
import { EchartsDoc } from "./component/echarts";
import { FINDDomMode } from "./component/findDomMode";
import { LocalStorageComponent } from "./component/loaclStorage";
import { UseLocationDemo } from "./component/location";
import { MixinComponent } from "./component/mixin";
import { Presicion } from "./component/presicion";
import { ReadonlyComponent } from "./component/readonly";
import { RefDemo } from "./component/refs";
import { SessionStorageComponent } from "./component/sessionStorage";
import { SetNewHook } from "./component/sethook";
import { TestLogin } from "./component/testLogin";
import { VDirective } from "./component/v_directive";

function Documents()
{
    const inputValue = useRef<HTMLInputElement>({} as any);
    const [msg,setMessage] = useState<string>('')
    const hrePath = useHref(`uselocation?msg=${msg}`)
    

    function HrefTo(e:any)
    {
        if(e.keyCode === 13)
        {
            // window.location.href = `uselocation?msg=${msg}`
            window.location.href = hrePath
        }
    }
    return(     
        <div style={{display:'flex',marginTop:'20px',paddingLeft:'20px',paddingRight:'20px'}}>
            <Board style={{width:'18%',padding:'10px 1%'}} border>
            <Collapse border={false} defaultActive={0}  width={"100%"}>
                    <CollapseItem title={"# 前言"} subtitle={"介绍"} name={0}>
                        <CollapseItemCell to={"intro"} content={"简介"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={"use"} content={"使用"} style={{textAlign:"center"}}></CollapseItemCell>
                        <div style={{textAlign:'center'}}>
                        <input ref={inputValue} type="text" onChange={
                            ()=>{
                                setMessage(inputValue.current.value)
                            }
                        } onKeyUp={HrefTo}/>
                        </div>
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
                        <CollapseItemCell to={"callback"} content={"CallBack"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={"sethook"} content={"SetHook"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`uselocation?msg=${msg}`} content={"UseLocation"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`echarts`} content={"Echarts"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`finddommode`} content={"FindDomMode"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`refs`} content={"Refs"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`context`} content={"Context"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`decorator`} content={"Decorator"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`testlogin`} content={"TestLogin"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`v_directive`} content={"V-Directive"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`readonly`} content={"Readonly"} style={{textAlign:"center"}}></CollapseItemCell>
                        <CollapseItemCell to={`mixin`} content={"Mixin"} style={{textAlign:"center"}}></CollapseItemCell>

                    </CollapseItem>
            </Collapse>
        </Board>

        <Routes>
            <Route path="axios" element={<AxiosComponent/>}></Route>
            <Route path="localstorage" element={<LocalStorageComponent/>}></Route>
            <Route path="sessionstorage" element={<SessionStorageComponent/>}></Route>
            <Route path="callback" element={<TestCallBack/>}></Route>
            <Route path="presicion" element={<Presicion/>}></Route>
            <Route path="sethook" element={<SetNewHook/>}></Route>
            <Route path="uselocation" element={<UseLocationDemo/>}></Route>
            <Route path="echarts" element={<EchartsDoc/>}></Route>
            <Route path="finddommode" element={<FINDDomMode/>}></Route>
            <Route path="refs" element={<RefDemo/>}></Route>
            <Route path="context" element={<ContextDemo/>}></Route>
            <Route path="testlogin" element={<TestLogin/>}></Route>
            <Route path="v_directive" element={<VDirective/>}></Route>
            <Route path="readonly" element={<ReadonlyComponent/>}></Route>
            <Route path="mixin" element={<MixinComponent/>}></Route>


        </Routes>
    </div>
    )
}
memo(Documents)
export {
    Documents
}