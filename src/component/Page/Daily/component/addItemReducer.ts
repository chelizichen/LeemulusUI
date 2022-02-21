interface itemMenuInterFace{
    index:number,
    todo:string,
    type:string,
    length:number,
    push:Function
}


let initState = [{index:1,todo:'2022 年 2月 21 日 '}]
function addItemReducer(preState = initState,action:itemMenuInterFace)
{
    const {todo,type,index} = action
    switch(type)
    {
        case "add":
            return initState.push({index:initState.length+1,todo})
        case "sub":
            const subIndex = initState.findIndex(el=> el.index === index)
            return initState.splice(subIndex,1)
        default:
            break;
    }
}
export { addItemReducer,initState };
export type { itemMenuInterFace };
