function deepCopy(target:any)
{
    let newObj:any = null;
    if(typeof target == "object" && typeof target !== null)
    {
        newObj = target instanceof Array? [] : {}
        for(let i in target)
        {
            newObj[i] = deepCopy(target[i])
        }
    }
    else{
        newObj = target
    }
    return newObj
}
export {
    deepCopy
}

