import React from 'react'
import * as echarts from 'echarts'


class Vaccine extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.state = {} ;
        this.option = {} ;
        this.vaccineData = [
            {date:'1.10',data:'29.1亿'},
            {date:'1.14',data:'29.3亿'},
            {date:'1.18',data:'29.5亿'},
            {date:'1.22',data:'29.8亿'},
            {date:'1.26',data:'30.1亿'},
            {date:'1.30',data:'30.5亿'},
            {date:'2.03',data:'30.9亿'},
            {date:'2.07',data:'31.6亿'},
        ]
    }
    componentDidMount()
    {
        this.option = {
            title: {
                text: 'Dynamic Data & Time Axis'
            },
            axisPointer:{
                animation:false
            },
            xAxis:{
                type:'time',
                splitLine:{
                    show:false
                }
            },
            yAxis:{
                type:'value',
                boundaryGap:[0,'100%'],
                splitLine:{
                    show:false
                }
            },
            series:[
                {
                    name:'Vaccine Date',
                    type:'line',
                    showSymol:false,
                    data:this.vaccineData
                }
            ]
        }
        this.chartDom = document.getElementById('main');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
        // setInterval(()=>{
        //     for(let i = 0;i<=5;i++)
        //     {
        //         this.vaccineData.shift();
        //         this.vaccineData.push();
        //     }
        // },1000)
    }
    render()
    {
        return(
            <div>
                <div id="main" style={{width:"500px",height:'500px'}}></div>
            </div>
        )
    }
}
export {
    Vaccine
}