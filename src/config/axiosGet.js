import axios from 'axios'

function get_CommpanyInfo(props)
{
    const { testData } = props
    axios.get('/api1/api/static/FundCommpanyInfo.js').then(res=>{
        let arr = res.data.split('=')
        arr[1] = eval("("+arr[1]+")")
        console.log(arr[1]);
    }).catch(err=>{
        console.log(err);
    })

    return props
}
/**
 * Split Params
 * @Params Data_netWorthTrend = 
 * @Params / *累计净值走势* /
 */
async function getFundById(number)
{
    let data
    await axios.get(`/api1/pingzhongdata/${number}.js`).then(res=>{
        let arr = res.data.split("Data_netWorthTrend = ")[1].split(";/*累计净值走势*/")
        arr[0] = eval("("+arr[0]+")")
        arr[0] = arr[0].reverse()
        data = arr[0].slice(0,100).reverse()
        // console  .log(data);
    }).catch(err=>{
        console.log(err);
    })
    return data
}


export {
    get_CommpanyInfo,
    getFundById
}