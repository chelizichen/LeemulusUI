import { useEffect , useRef, useState } from "react"
import * as echarts from 'echarts';
function Demo1()
{
    
    let [currOption,setOption] = useState({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
    })
    let clearTimer = useRef<any>()
    let chartDom = useRef<HTMLDivElement>({} as HTMLDivElement)
    
    // 初始化 设置定时器
    useEffect(()=>{
        clearTimer.current = setInterval(()=>{
            let newOption = currOption;
            newOption.series[0].data[0] = (Math.random()*100);
            newOption.series[0].data[1] = (Math.random()*100);
            newOption.series[0].data[2] = (Math.random()*100);
            newOption.series[0].data[3] = (Math.random()*100);
            newOption.series[0].data[4] = (Math.random()*100);
            newOption.series[0].data[5] = (Math.random()*100);
            newOption.series[0].data[6] = (Math.random()*100);
            setOption({...newOption})
        },1000)
    },[])

    // 
    useEffect(()=>{
        let myChart = echarts.init(chartDom.current);
        myChart.setOption(currOption)
    },[currOption])
    
    // 销毁定时器
    useEffect(()=>()=>{
        clearInterval(clearTimer.current)
        console.log('生命周期结束勾子');
    },[])

    return (
        <div>
            <div ref={chartDom} style={{width:'500px',height:'500px'}}></div>
        </div>
    )
}
export{
    Demo1
}