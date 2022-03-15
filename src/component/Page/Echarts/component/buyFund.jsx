import React from 'react'
import axios from 'axios'
import * as echarts from 'echarts'
import { Board } from '../../../../leemulus/Board'
import { Title } from '../../../../leemulus/Title'
class BuyFund extends React.Component{
    constructor(props)
    {
        super(props)
        // this.state = {
        //     fundName:[]
        // }
        this.fundName = []
        this.option ={
        }
    }
    getFundName(propsFundArray)
    {
        let fundName = []
        propsFundArray.map(element => {
            fundName.push(element.fund_name)
        });
        return fundName
    }
    getFundMoney(propsFundArray)
    {
        let fundMoney = []
        propsFundArray.map(element => {
            // if
            fundMoney.push({value:element.buy_money})
        });
        let mostIndex = this.sortMostMoney(fundMoney)
        console.log(mostIndex); // 0
        fundMoney[mostIndex].itemStyle = {
            color: '#a90000'
        }
        return fundMoney
    }

    sortMostMoney(propsFundArray)
    {
        let max = propsFundArray[0].value;
        let index = 0;
        for (let i = 0; i < propsFundArray.length; i++) {
            if (max < propsFundArray[i].value) {
                max = propsFundArray[i].value;
                index = i;
            }
        }
        return index;
    }

    async componentDidMount()
    {
        await axios.get('/api2/fundList/all').then(res=>{
            // console.log(res.data);
            this.fundName = res.data
          }).catch(err=>{
            console.log(err);
        })

        this.option ={
            xAxis: {
              type: 'category',
              data: this.getFundName(this.fundName)
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data:this.getFundMoney(this.fundName),
                type: 'bar'
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
            <Title title="基金数据">自购</Title>
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
    BuyFund
}