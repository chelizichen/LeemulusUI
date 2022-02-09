let chart2 = {
    title:{
        text:"Last 10 Days Step",
        textStyle:{
            color:"#366bf3",
            fontFamily:"Segoe UI",
            fontSize:30,
        },
        padding:[10,0,0,100],
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick:{
            show:false
        },
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
    },
    visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [{
            gt: 1,
            lt: 3,
            color: 'rgba(0, 0, 180, 0.4)'
        }, {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 0, 180, 0.4)'
        }]
    },
    tooltip: {
        trigger: 'axis'
    },
    series: [
        {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
                color: '#5470C6',
                width: 5
            },
            markLine: {
                symbol: ['none', 'none'],
                label: {show: false},
                data: [
                    {xAxis: 1},
                    {xAxis: 3},
                    {xAxis: 5},
                    {xAxis: 7}
                ]
            },
            areaStyle: {},
            data: [
                ['2021-7-31', 200],
                ['2021-8-01', 560],
                ['2021-8-02', 750],
                ['2021-8-03', 580],
                ['2021-8-04', 250],
                ['2021-8-05', 300],
                ['2021-8-06', 450],
                ['2021-8-07', 300],
                ['2021-8-08', 100],
                ['2021-8-09', 500],
            ]
        }
    ]
};
export{
    chart2
}
