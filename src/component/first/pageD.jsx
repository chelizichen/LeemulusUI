import { useEffect, useRef, useState } from "react"
import * as echarts from 'echarts'
import { Option } from "../echarts/demo1"
function PageD()
{
    useEffect(()=>{
        let demo1 = echarts.init(document.getElementById('demo1'))
        demo1.setOption(Option)
    })
    return(
        <div>
            <h1>D页导航</h1>
            <div id="demo1" style={{width:'200px',height:'200px'}}></div>
            <FocusDemo/>
            <GetPreV/>
            <HowToUseEffect/>

            <hr/>
            <ShowPerson/>

        </div>
    )
}

function FocusDemo()
{
    const inputRef = useRef()

    return(
        <div>
            <input ref={inputRef}></input>
            <button onClick={()=>{
                console.log(inputRef);
                inputRef.current.focus();
            }}>点击</button>
        </div>
    )
}

function GetPreV()
{
    const preV = useRef(null)

    const [count,setCount] = useState(0)
    return(
        <div>
            <div>Count is {count}</div>
            <div> Previous Value is {preV.current}</div>
            <button onClick={()=>{
                preV.current = count
                setCount(count => count + 1)
            }}>加</button>

            <button onClick={()=>{
                preV.current = count
                setCount(count => count - 1)
            }}>减</button>
        </div>
    )
}

function HowToUseEffect()
{
    const [count,setCount] = useState(0)
    function MyEffect()
    {
        const I = setInterval(()=>{
            console.log(count)
            setCount(count => count+1)
        },1000)
        // 清除定时器
        return ()=> clearInterval(I)
    }
    useEffect(MyEffect,[count])

    return (
        <div>
            <h1> How to use “useEffect”</h1>
            <h1>{count}</h1>

        </div>
    )
}

function sleep(time)
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
}
async function getPerson()
{
    await sleep(200)
    return ['a','b','c']
}

function usePerson()
{
    const [list,setList] = useState(null)

    async function request()
    {
        const list = await getPerson()
        setList(list)
    }
    useEffect(()=>request,[])
    return list
}

function ShowPerson()
{
    const list = usePerson()
    if(list === null )
    {
        return <div>Loading...</div>
    }
    return <div>
        {
            list.map((name,index)=>{
                return <li key={index}>{name} --- {index}</li>
            })
        }
    </div>
    // return 
}
export default PageD