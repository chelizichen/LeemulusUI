import { Routes, Route } from "react-router-dom"
import { Board } from "../../../leemulus/Board"
import { CollapseItemCell } from "../../../leemulus/Collapse"
import { BuyFund } from "./component/buyFund"
import { Demo1 } from "./component/demo1"
import { Demo2 } from "./component/demo2"
import { Demo3 } from "./component/demo3"
import { Fund } from "./component/fund"
import { Profit } from "./component/Profit"
import { Vaccine } from "./component/vaccine"
import { SetFund } from './component/setFund'

function MyEcharts()
{
    return(
        <div>
              <div style={{display:'flex',marginTop:'20px',paddingLeft:'20px',paddingRight:'20px'}}>
                <Board style={{width:'18%',padding:'10px 1%'}} border>
                    <CollapseItemCell to={"demo1"} content={"项目1"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"demo2"} content={"项目2"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"demo3"} content={"项目3"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"fund"} content={"基金数据"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"vaccine"} content={"疫情数据"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"buyfund"} content={"购入"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"profit"} content={"盈利"} style={{textAlign:"center"}}></CollapseItemCell>
                    <CollapseItemCell to={"setFund"} content={"保存数据"} style={{textAlign:"center"}}></CollapseItemCell>
                
                </Board>
                <Routes>
                    <Route path="/" element={<Demo1/>}></Route>
                    <Route path="demo1" element={<Demo1/>}></Route>
                    <Route path="demo2" element={<Demo2/>}></Route>
                    <Route path="demo3" element={<Demo3/>}></Route>
                    <Route path="fund" element={<Fund/>}></Route>
                    <Route path="vaccine" element={<Vaccine/>}></Route>
                    <Route path="buyfund" element={<BuyFund/>}></Route>
                    <Route path="profit" element={<Profit/>}></Route>
                    <Route path="setFund" element={<SetFund/>}></Route>

                    

                </Routes>  
            </div>
        </div>
    )
}
export{
    MyEcharts
}