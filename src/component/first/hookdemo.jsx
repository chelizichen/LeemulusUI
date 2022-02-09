import { useEffect, useRef, useState } from "react";

function HookDemo()
{
    const [name,setName] = useState('lee')
    const [age,setAge] = useState(1)

    const testRef = useRef().current
    console.log(testRef);
    // console.log('B',this.RefValue);
    useEffect(()=>{
        console.log('name改变了');
        // return 代表着componentWillUnmount
        // return()=>{
        // }
    },[name])

    useEffect(()=>{
        console.log('age改变了');
        // return()=>{
        // }
    },[age])

    function add()
    {
        setAge((age)=>{
            return age+1
        })
    }
    function change()
    {
        setName((name)=>{
            return name+'mulus'
        })
    }
    return(
        <div>
            <div>{name}</div>
            <button onClick={add}>增加</button>
            <button onClick={change}>改变</button>
            <input ref={testRef}></input>
        </div>
    )
}
export default HookDemo