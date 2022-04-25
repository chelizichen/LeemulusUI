import { useRef } from 'react'
import img1 from '../../../../assets/img/1.png'
import img2 from '../../../../assets/img/2.png'
import img3 from '../../../../assets/img/3.png'
import img4 from '../../../../assets/img/4.png'

function Baidu()
{

    return(
        <div className="baidu">
            <span className="baidulogo"><img src={img2}  alt=""/></span>
            <input type="text" />
            <span className="cra"></span>
            <input type="submit" value="百度一下"/>
        </div>
    )
}
export {
    Baidu
}