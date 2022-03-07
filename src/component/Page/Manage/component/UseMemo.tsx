import { memo, useEffect, useMemo, useState } from "react"

interface memoProps
{
    data:dataProps
}
interface dataProps{
    name:string,
}
const UseMemoComponent:React.FC<memoProps> = memo( ({ data }) =>{
    console.log('children rerender',data.name);
    
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
})

const HookDemo =()=>{

    const [count,setCount] = useState<number>(1)
    const [name,setName] = useState<string>('leemulus')
    
    useEffect(()=>{
        console.log('count');
    },[count])
    useEffect(()=>{
        console.log('name');
    },[name])
    // const data ={
    //     name
    // }

    // 在父组件render 时，子组件也会重新render，而此时data的值并没有更改，并且 执行到
    // const data = { name } 时会重新分配一个内存对象，且data 值并没有更改,此时会造成资源浪费
    // 这样就多余render了，感觉性能浪费了！于是useMemo 作为一个有着暂存能力的
    const data = useMemo(()=>{
        return {
            name
        }
    },[name])
    // 将 name 与 [name 比较]
    
    return(
        <div>
            <h1>{ count }</h1>
            <button onClick={()=>{ setCount(count+1)}}> Update Count </button>
            <UseMemoComponent data={data}/>
        </div>
    )
}
export {
    UseMemoComponent,
    HookDemo
}