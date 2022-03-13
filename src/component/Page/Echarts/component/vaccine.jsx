import React from 'react'
import * as echarts from 'echarts'
import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

class Vaccine extends React.Component{
    constructor(props)
    {
        super(props) ;
        this.state = {
            initData:[
                {time:'1.10','疫苗接种数':'29.1'},
            ]
        } ;
        this.option = {
        } ;
        this.vaccineData = [
            {time:'1.14','疫苗接种数':'29.3'},
            {time:'1.18','疫苗接种数':'29.5'},
            {time:'1.22','疫苗接种数':'29.8'},
            {time:'1.26','疫苗接种数':'30.1'},
            {time:'1.30','疫苗接种数':'30.5'},
            {time:'2.03','疫苗接种数':'30.9'},
            {time:'2.07','疫苗接种数':'31.6'},
            {time:'2.11','疫苗接种数':'32.0'},
            {time:'2.15','疫苗接种数':'32.4'},
            {time:'2.19','疫苗接种数':'32.8'},
            {time:'2.23','疫苗接种数':'33.2'},
            {time:'2.17','疫苗接种数':'33.5'},
            {time:'3.01','疫苗接种数':'33.7'},
            {time:'3.05','疫苗接种数':'34.0'},
            {time:'3.09','疫苗接种数':'34.5'},
            {time:'3.13','疫苗接种数':'34.9'},
            {time:'3.17','疫苗接种数':'35.2'},
            {time:'3.21','疫苗接种数':'35.5'},
            {time:'3.25','疫苗接种数':'36.1'},
            {time:'3.29','疫苗接种数':'36.3'},
            {time:'4.02','疫苗接种数':'36.7'},
            {time:'4.06','疫苗接种数':'36.9'},
            {time:'4.10','疫苗接种数':'37.2'},
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
              dimensions: ['time', '疫苗接种数'],
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
                // splitLine:{
                //     show:false
                // }
            },
            series: [{
                type: 'line',
                // showSymbol: false,
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
            <div style={{width:'78%',marginLeft:'2%'}}>
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