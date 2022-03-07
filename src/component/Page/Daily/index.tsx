import { Routes, Route } from "react-router-dom"
import { Board } from "../../../leemulus/Board"
import { CollapseItemCell } from "../../../leemulus/Collapse"
import { Important } from "./component/important"
import { Task } from "./component/task"
import { Today } from "./component/today"

function Daily()
{
    return(
        <div>
            <div style={{display:'flex',marginTop:'20px'}}>
                <Board style={{width:'20%',padding:'10px'}} border>
                    <CollapseItemCell to={"today"} content={"今日"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"important"} content={"重要"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"use"} content={"计划"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"task"} content={"任务"} style={{textAlign:"center"}}></CollapseItemCell>
                </Board>
                <Routes>
                    <Route path="today" element={<Today/>}></Route>
                    <Route path="task" element={<Task/>}></Route>
                    <Route path="important" element={<Important/>}></Route>

                </Routes>  
            </div>
        </div>
    )
}
export default Daily