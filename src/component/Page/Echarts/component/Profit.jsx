import React from 'react'
import axios from 'axios'
import * as echarts from 'echarts'
import { Board } from '../../../../leemulus/Board'
import { Title } from '../../../../leemulus/Title'
import { getFundById } from '../../../../config/axiosGet'
import { setNumProxy } from '../../../../proxy/setNumProxy'
// import { nextTick } from 'process'
class Profit extends React.Component{
    constructor(props)
    {
        super(props)
        // this.state = {
        //     newFundMoney:[]
        // }
        this.fundArray = []
        this.option ={
        }
        this.data = {

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

        // 问题。。 外部等待 foreach 结束
        propsFundArray.forEach(async (element) => {
            await this.getProfit( element.fund_id ).then(data=>{
                fundMoney.push({value:element.buy_money * data })
            }).catch(err=>{
                console.log(err);
            })
        });
        
        // 查询最大 value
        // let mostIndex = this.sortMostMoney(fundMoney)
        // fundMoney[mostIndex].itemStyle = {
        //     color: '#a90000'
        // }
        console.log('48',fundMoney); //[]
        setTimeout(()=>{
            let mostIndex = this.sortMostMoney(fundMoney)
            fundMoney[mostIndex].itemStyle = {
                color: '#a90000'
            }
            console.log('54',fundMoney); // [] 5 length
        },1000)



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
    async getProfit(fundId)
    {
        let buyDay;
        let profit;
        let fundData = await getFundById(fundId);
        await axios.get('/api2/fundList/id',{
            params:{
                id:fundId
            }
        }).then(res=>{
            buyDay = res.data[0].buy_day;
        }).catch(err=>{
            console.log(err);
        })
        let newData = fundData.slice(0,buyDay)
        profit = setNumProxy({
            new:newData[0].y,
            old:newData[newData.length-1].y
        },10000,({...args})=>{
            if(args.new > args.old)
            {
                return parseFloat((args.new - args.old).toFixed(2))
            }
            else{
                return -parseFloat((args.old - args.new).toFixed(2))
            }
        })
        return profit
    }

    async componentDidMount()
    {
        await axios.get('/api2/fundList/all').then(res=>{
            this.fundArray = res.data
          }).catch(err=>{
            console.log(err);
        })

        this.option ={
            xAxis: {
              type: 'category',
              data: this.getFundName(this.fundArray)
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data:this.getFundMoney(this.fundArray),
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
    Profit
}