import { useMemo, useState } from "react"

function UseMemoDemo()
{
    const [num,setNum] = useState<number>(1)
    const [dark,setDark] = useState<boolean>(false)
    const doubleNumber = useMemo(()=>{
        return slowFunction(num)
    },[num])

    const themeStyle = useMemo(()=>{
        return{
            backgroundColor: dark?'white':'black',
            color: dark?'black':'white',
        }
    },[dark])
    // 保存对象的引用，否则每次修改state时会重新运行消耗内存
    // const themeStyle = {
    //     backgroundColor: dark?'white':'black',
    //     color: dark?'black':'white',
    // }
    return(
        <div>
            <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))}/>
            <button onClick={()=>setDark(dark => !dark)}>change Theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(num:number)
{
    for(let i =0;i<100;i++){
        console.log(1);
        
    }
    return num*2
}
export {
    UseMemoDemo
}