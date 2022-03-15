import axios from 'axios'
import React from 'react'
import { Board } from "../../../../leemulus/Board"
import { Button } from '../../../../leemulus/Button'
import { Title } from "../../../../leemulus/Title"
class SetFund extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {}
        this.NameRef = React.createRef();
        this.IDRef = React.createRef();
        this.DayRef = React.createRef();
        this.MoneyRef = React.createRef();
        this.data ={
            loading:false
        }
    }
    save()
    {
        axios.get('/api2/fundList/add',{
            params:{
                fund_id:this.IDRef.current.value,
                buy_money:this.MoneyRef.current.value,
                buy_day:this.DayRef.current.value,
                fund_name:this.NameRef.current.value
            }
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    render()
    {
        return(
            <div style={{width:'78%',marginLeft:'2%'}}>
                <Title title="疫情数据图">接种疫苗</Title>
                <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                    <div>
                        基金名称：<input type="text" ref={this.NameRef}/><br/>
                        基金编号：<input type="text" ref={this.IDRef}/><br/>
                        买入金额：<input type="text" ref={this.MoneyRef}/><br/>
                        买入时间：<input type="text" ref={this.DayRef}/><br/>
                        <Button onChange={()=>this.save()} loading={this.data.loading} type="primary" >保存数据</Button>
                    </div>
                </Board>
            </div>
        )
    }
}
export {
    SetFund
}