import { Board } from "../../../../leemulus/Board"
import { ShowCurrTime } from "../../../../leemulus/Time"
import { Title } from "../../../../leemulus/Title"

function DailyLog()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="DailyLog">
                日记
            </Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>       
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',fontSize:'30px'}}>
                    3.10 山水广电 一面挂
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',fontSize:'18'}}>
                    原因：Java 基础不牢，在校课程学习不扎实。
                </div>
            </Board>

            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>       
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',fontSize:'30px'}}>
                    3.11 辰英科技 一面挂
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',fontSize:'18'}}>
                    原因1：Vue 很久没碰了，没有了解过Vue 原理。
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',fontSize:'18'}}>
                    原因2： 自大，没有把面试放在眼里，觉得自己随便写都能过，其实自己啥也不是。
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',fontSize:'18'}}>
                    考点：数组中文排序
                </div>
            </Board>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>       
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',fontSize:'30px'}}>
                    3.11 想做一个疫苗接种数据的动态显示Echarts 图
                </div>
            </Board>

            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>       
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',fontSize:'30px'}}>
                    3.12 Echarts 做完
                </div>
            </Board>

        </div>
    )
}

export {
    DailyLog
}