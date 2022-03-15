import axios from 'axios'
import * as echarts from 'echarts'
import React from 'react'
import { get_CommpanyInfo, getFundById } from '../../../../config/axiosGet'
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
    getX_Worth(arrayProps)
    {
        let newArray = []
        for(let i = 0;i<arrayProps.length;i++)
        {
            newArray.push(arrayProps[i].y)
        }
        return newArray
    }
    async componentDidMount()
    {
        let data_320007 = await getFundById('320007');
        let data_005827 = await getFundById('005827');
        let data_167301 = await getFundById('167301');
        let data_161725 = await getFundById('161725');
        let data_002199 = await getFundById('002199');

        axios.get('/api2/fundList/all').then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })

        // axios.get('/api2/fundList/add',{
        //   params:{
        //     buy_money:'200',
        //     fund_id:'222222',
        //     buy_day:1,
        //     fund_name:'测试数据'
        //   }
        // }).then(res=>{
        //   console.log(res);
        // }).catch(err=>{
        //   console.log(err);
        // })

        this.option = {
            title: {
              text: 'Stacked Line'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['易方达蓝筹', '诺安成长', '方正保险', '招商白酒', '前海军工']
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
            //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: '易方达蓝筹',
                type: 'line',
                stack: 'Total',
                data: this.getX_Worth(data_005827)
              },
              {
                name: '诺安成长',
                type: 'line',
                stack: 'Total',
                data: this.getX_Worth(data_320007)
              },
              {
                name: '方正保险',
                type: 'line',
                stack: 'Total',
                data: this.getX_Worth(data_167301)
              },
              {
                name: '招商白酒',
                type: 'line',
                stack: 'Total',
                data: this.getX_Worth(data_161725)
              },
              {
                name: '前海军工',
                type: 'line',
                stack: 'Total',
                data: this.getX_Worth(data_002199)
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
            <Title title="基金数据">100 Days</Title>
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