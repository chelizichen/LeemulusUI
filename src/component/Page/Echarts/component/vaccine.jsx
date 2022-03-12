import React from 'react'
import * as echarts from 'echarts'
import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

class Vaccine extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.state = {
            initData:[]
        } ;
        this.option = {
        } ;
        this.vaccineData = [
            {time:'1.10','data':'29.1'},
            {time:'1.14','data':'29.3'},
            {time:'1.18','data':'29.5'},
            {time:'1.22','data':'29.8'},
            {time:'1.26','data':'30.1'},
            {time:'1.30','data':'30.5'},
            {time:'2.03','data':'30.9'},
            {time:'2.07','data':'31.6'},
            {time:'2.11','data':'32.0'},
            {time:'2.15','data':'32.4'},
            {time:'2.19','data':'32.8'},
            {time:'2.23','data':'33.2'},
            {time:'2.17','data':'33.5'},
            {time:'3.01','data':'33.7'},
            {time:'3.05','data':'34.0'},
            {time:'3.09','data':'34.5'},
            {time:'3.13','data':'34.9'},
            {time:'3.17','data':'35.2'},
            {time:'3.21','data':'35.5'},
            {time:'3.25','data':'36.1'},
            {time:'3.29','data':'36.3'},
            {time:'4.02','data':'36.7'},
            {time:'4.06','data':'36.9'},
            {time:'4.10','data':'37.2'},
        ]
        this.chartDom = null;
    }
    componentDidMount()
    {
        this.option = {
            title: {
                text: 'Vaccine Data & Time Axis'
            },
            legend: {},
            tooltip: {},
            dataset: {
              dimensions: ['time', 'data'],
              source: this.state.initData,
            //   source: this.,

            },
            xAxis: { type: 'category',
                splitLine:{
                    show:true
                }
            },
            yAxis: {
                type:'value',
                boundaryGap:[0,'100%'],
                splitLine:{
                    show:false
                }
            },
            series: [{
                type: 'line',
                showSymbol: false,
            }]
          };

        this.chartDom = document.getElementById('main');
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
        
        let timer = setInterval(()=>{
            this.setState({
            },()=>{
                this.state.initData.push(this.vaccineData[0])
                if(this.vaccineData.length === 0)
                {
                    clearInterval(timer)
                    return
                }
                this.vaccineData.shift();
                console.log(this.state.initData);
            })
        },1000)
    }
    componentDidUpdate(preProps,preState)
    {
        let myChart = echarts.init(this.chartDom);
        this.option && myChart.setOption(this.option)
        // return this.
    }
    render()
    {
        return(
            <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
                <Title title="疫情数据图">接种疫苗</Title>
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
    Vaccine
}