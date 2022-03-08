import { Routes, Route } from "react-router-dom"
import { Board } from "../../../leemulus/Board"
import { CollapseItemCell } from "../../../leemulus/Collapse"
import { Demo1 } from "./component/demo1"
import { Demo2 } from "./component/demo2"
import { Demo3 } from "./component/demo3"

function MyEcharts()
{
    return(
        <div>
              <div style={{display:'flex',marginTop:'20px'}}>
                <Board style={{width:'20%',padding:'10px'}} border>
                    <CollapseItemCell to={"demo1"} content={"项目1"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"demo2"} content={"项目2"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"demo3"} content={"项目3"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"demo4"} content={"项目4"} style={{textAlign:"center"}}></CollapseItemCell>
                </Board>
                <Routes>
                    <Route path="demo1" element={<Demo1/>}></Route>
                    <Route path="demo2" element={<Demo2/>}></Route>
                    <Route path="demo3" element={<Demo3/>}></Route>


                </Routes>  
            </div>
        </div>
    )
}
export{
    MyEcharts
}