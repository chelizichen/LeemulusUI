import { Routes, Route } from "react-router-dom"
import { Board } from "../../../leemulus/Board"
import { CollapseItemCell } from "../../../leemulus/Collapse"
import { Important } from "./component/important"
import { DailyLog } from "./component/log"
import { Plan } from "./component/plan"
import { Task } from "./component/task"
import { Today } from "./component/today"

function Daily()
{
    return(
        <div>
            <div style={{display:'flex',marginTop:'20px',paddingLeft:'20px',paddingRight:'20px'}}>
            <Board style={{width:'18%',padding:'10px 1%'}} border>
                    <CollapseItemCell to={"today"} content={"今日"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"important"} content={"重要"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"plan"} content={"计划"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"task"} content={"任务"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"log"} content={"日常"} style={{textAlign:"center"}}></CollapseItemCell>
                </Board>
                <Routes>
                    <Route path="today" element={<Today/>}></Route>
                    <Route path="task" element={<Task/>}></Route>
                    <Route path="important" element={<Important/>}></Route>
                    <Route path="plan" element={<Plan/>}></Route>
                    <Route path="log" element={<DailyLog/>}></Route>
                </Routes>  
            </div>
        </div>
    )
}
export default Daily