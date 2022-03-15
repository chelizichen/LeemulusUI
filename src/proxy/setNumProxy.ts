// # 0.01 版本 
function setNumProxy0_1(target:Object,size:number)
{
    let handler = {
        get:function(target:any,properkey:any)
        {

            if(typeof target[properkey] === 'number')
            {
                target[properkey] = target[properkey] * size
                return Reflect.get(target,properkey)
            }
            else
            {
                throw new TypeError('properkey is not  number')
            }
        },
        set:function(target:any,properkey:any,value:any)
        {
            return Reflect.set(target,properkey,value)
        }
    }
    
    let proxyObj = new Proxy(target,handler)
    return proxyObj
}

interface numProps
{
    [properkey:string]: number
}
function setNumProxy(target:Object,size:number,fn:Function)
{
     // 先判断 倍数是否为10的倍数
    if(size % 10 === 0)
    {
        // 拦截器
        let handler = {
            get:function(target:numProps,properkey:string )
            {
                if(typeof target[properkey] === 'number')
                {
                    target[properkey] = target[properkey] * size
                    return Reflect.get(target,properkey)
                }
                else
                {
                    throw new TypeError(' 参数必须为数字 ')
                }
            }
        }
        let proxy = new Proxy(target,handler)
        let currValue = fn(proxy)
        return currValue / size
    }
    else
    {
        throw new Error('倍数 不为 10 的倍数')
    }
}
export {
    setNumProxy0_1,
    setNumProxy
} 