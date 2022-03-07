import { useEffect, useMemo, useState } from "react"
import * as echarts from 'echarts';
function Important()
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


    useEffect(()=>{
        let chartDom:any = document.getElementById('main');
        let myChart = echarts.init(chartDom);
        myChart.setOption(currOption)
    },[currOption])

    useEffect(()=>{
        setTimeout(()=>{
            let newOption = currOption;
            newOption.series[0].data[0] = 100;
            setOption({...newOption})
        },1000)
    },[])

    return (
        <div>
            <div id="main" style={{width:'500px',height:'500px'}}></div>
        </div>
    )
}
export{
    Important
}