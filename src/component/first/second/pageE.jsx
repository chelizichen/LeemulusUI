import {BrowserRouter, NavLink,Routes,Route} from 'react-router-dom'
import ThirdPage from '../third/pageE'
function SecondPage()
{
    return(
        <div>
            <div> 二级页面组件 </div>
            <NavLink to="thirdPageE"> 三级页面跳转 </NavLink>
            <Routes>
                <Route path="thirdPageE/*" element={<ThirdPage/>}></Route>
            </Routes>
        </div>
    )
}
export default SecondPage