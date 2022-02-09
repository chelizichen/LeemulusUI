import { useEffect } from 'react'
import * as echarts from 'echarts'
import './index.css'
import {  chart1 } from '../../../echarts/chart1'
import {  chart2 } from '../../../echarts/chart2'
import {  chart3 } from '../../../echarts/chart3'
import { Progress } from '../../../leemulus/Progress'
import { Cell } from '../../../leemulus/Cell'

import item1 from '../../../assets/item1.jpg'
import item2 from '../../../assets/item2.png'
import item3 from '../../../assets/item3.png'
import { Article } from '../../../leemulus/Article'
import { Slider } from '../../../leemulus/Slider'

function Home()
{
    function initCharts()
    {
        let ChartDOM1:any = document.getElementById('chart1')
        let ChartDOM2:any = document.getElementById('chart2')
        let ChartDOM3:any = document.getElementById('chart3')

        let demo1 = echarts.init(ChartDOM1)
        let demo2 = echarts.init(ChartDOM2)
        let demo3 = echarts.init(ChartDOM3)

        demo1.setOption(chart1)
        demo2.setOption(chart2)
        demo3.setOption(chart3)
    }
    useEffect(()=>{
        initCharts()
    })
    function initSuccess():Promise<string>    
    {
        return new Promise<string>((resolve,reject)=>{
            resolve('Promise Data')
            // reject('promise')
        })
    }
    function linkToIntroduce()
    {
        window.location.href="/introduce"
    }
    return(
        <div>
            <div className="home_out_bg">
                <div className="content">
                    <div className="intro">
                        <div style={{fontSize:'32px'}}>七月实习使用 Vue2+Element</div>
                        <div style={{fontSize:'32px'}}>彼时自学 Vue3+Vant</div>
                        <div style={{fontSize:'32px'}}>现在我将使用 React Hooks 和 自己封装的UI组件重新编写 </div>
                        <div style={{fontSize:'32px'}}><b>Leemulus</b> 13:06 2022/2/6</div>
                    </div>
                    <Slider defaultValue={0} min={0} max={100} step={1} changeValue={95} bindChange={linkToIntroduce} style={{width:'200px'}}/>
                    
                </div>
                <div className="chart1_out">
                    <div id="chart1" ></div>
                </div>
                <div className="chart23_out">
                    <div id="chart2"></div>
                    <div id="chart3"></div>
                </div>
            </div>

            <div className="exp_out">
                <div style={{fontSize:'30px',fontWeight:600}}>Experience</div>
                <div className="exp_content_out">
                    <Article src={item1} content={'正在实习前端，负责还原页面和增加动态效果，主要以原生JS为主。'} time={'2021.4 - 2021.6'} />
                    <Article src={item2} content={'瞄瞄科技实习前端，负责还原页面，编写Echarts，编写组件，联调接口，技术栈为Vue2+Element'} time={'2021.6 - 2021.9'} />
                    <Article src={item3} content={'自学React，用TypeScript编写UI组件库，在Documents和Introduce均有介绍'} time={'2022'} />
                </div>
            </div>
            
            <Progress color="blue" successFunc={initSuccess}/>
            <div style={{display: "flex",alignItems: "center",justifyContent: "space-between",padding:"20px 20%"}}>
               <div>
                    <Cell padding={"5px"} title="@ 13476973442"  width={"400px"} height={"30px"}>电话&微信</Cell>
                    <Cell padding={"5px"} title="@ 1347290221@qq.com"  width={"400px"} height={"30px"}>电子邮件</Cell>
                    <Cell padding={"5px"} title="@ chelizichen"  width={"400px"} height={"30px"}>Git&Gitee</Cell>
                    <Cell padding={"5px"} title="@ chelizichen"  width={"400px"} height={"30px"}>NPM</Cell>
               </div>
               <div>
                    <Cell padding={"5px"} title="@ leecumulus"  width={"400px"} height={"30px"}>知乎</Cell>
                    <Cell padding={"5px"} title="@ leemulus"  width={"400px"} height={"30px"}>哔站</Cell>
                    <Cell padding={"5px"} title="@ 武汉城市学院"  width={"400px"} height={"30px"}>院校</Cell>
                    <Cell padding={"5px"} title="@ 大学生计算机设计大赛省三"  width={"400px"} height={"30px"}>竞赛</Cell>
               </div>

            </div>
            <div>
            </div>
        </div>
    )
}
export {
    Home
}