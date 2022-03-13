import * as echarts from 'echarts'
import React from 'react'
import { get_005827, get_320007, get_CommpanyInfo } from '../../../../config/axiosGet'
import { Board } from '../../../../leemulus/Board'
import { Title } from '../../../../leemulus/Title'
class Fund extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            initData:[],
        }
        this.option ={

        }
    }
    async componentDidMount()
    {
        let data_320007 = await get_320007();
        let data_005827 = await get_005827();
        console.log(data_005827);
        // console.log(data);
        this.option = {
            title: {
              text: 'Stacked Line'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
              }
            ]
          };
        this.chartDom = document.getElementById('main');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
        
    }
    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>
            <Title title="基金数据">320007</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px',height:'700px'}}>
                    <div id="main" style={{width:"100%",height:'80%'}}></div>
                </div>
            </Board>
        </div>
        )
    }
}
export {
    Fund
}