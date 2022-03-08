function setNumProxy(target:Object,size:number)
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
                // console.log('不为number');
                // return Reflect.get(target,properkey)
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

export default setNumProxy