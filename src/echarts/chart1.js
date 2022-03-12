let chart1 = {
    title: {
        text: 'Test 01 Chart',
        padding:[10,0,0,100],
        textStyle:{
            color:"#3b94a9",
            fontFamily:"Segoe UI",
            fontSize:30,
        },
        link:"/day728",
        target:"self"
    },
    tooltip: {
        trigger: 'axis'
    },
    // legend: {
    //     data: ['wake', 'sleep']
    // },
    xAxis: {
        // show:false,
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Satu', 'Sun'],
        axisTick:{
            show:false
        },
    },

    yAxis: {
        type: 'value',
        // axisLabel: {
        //     formatter: '{value} °C'
        // }
    },
    series: [
        {
            symbol:"none",
            name: 'wake',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            // markPoint 表明最大最小值
            // markPoint: {
            //     data: [
            //         {type: 'max', name: '最大值'},
            //         {type: 'min', name: '最小值'}
            //     ]
            // },

            // markLine 标明平均值
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // }
        },
        {
            symbol:"none",
            name: 'sleep',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            // markPoint: {
            //     data: [
            //         {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            //     ]
            // },
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'},
            //         [{
            //             symbol: 'none',
            //             x: '90%',
            //             yAxis: 'max'
            //         }, {
            //             symbol: 'circle',
            //             // label: {
            //             //     position: 'start',
            //             //     formatter: '最大值'
            //             // },
            //             type: 'max',
            //             name: '最高点'
            //         }]
            //     ]
            // }
        }
    ]
};

export {chart1}