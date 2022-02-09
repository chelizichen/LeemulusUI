let chart3 ={
    title:{
        text:"Last 7 Days Cost",
        textStyle:{
            color:"#c598b5",
            fontFamily:"Segoe UI",
            fontSize:30,
        },
        padding:[10,0,0,100],
    },
    xAxis:{
        type:'category',
        data:['Mon','Tues','Wed','Thus','Fri','Satu','Sun'],
        axisTick:{
            show:false
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    yAxis:{
        type:"value"
    },
    series:[{
        data:[120,200,150,80,70,110,130],
        type:'bar'
    }]
}
export {
    chart3
}