import './App.css';
import {BrowserRouter, NavLink,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import { Home } from './component/Page/Home';
import { Introduce } from './component/Page/Introduce';
import { Documents } from './component/Page/Documents';
import Daily from './component/Page/Daily';
import { Manage } from './component/Page/Manage';

import { NavBar } from './leemulus/NavBar';
import { Loading } from './leemulus/Loading';


function App() {
  let [load,setLoading] =useState<boolean>(true)
  function closeLoading()
  {
      setTimeout(()=>{
          setLoading(false)
      },2000)
  }
  return (
    <div>
      <BrowserRouter>
      <div className="navLink">
        <NavLink to='Home' className={ ({isActive}) =>'defaultStyle'+' LeemulusStyle' + (isActive ?' activeStyle':'')} >Leemulus</NavLink>
        <NavLink to='Introduce' className={ ({isActive}) =>'defaultStyle'+ (isActive ?' activeStyle':'')} >Introduce</NavLink>
        <NavLink to='Documents' className={ ({isActive}) =>'defaultStyle'+ (isActive ?' activeStyle':'')} >Documents</NavLink>
        <NavLink to='Daily' className={ ({isActive}) =>'defaultStyle'+ (isActive ?' activeStyle':'')} >Daily</NavLink>
        <NavLink to='Manage' className={ ({isActive}) =>'defaultStyle'+ (isActive ?' activeStyle':'')} >Manage</NavLink>
      </div>
        
        <NavBar>
          <Loading load={load} bindLoad={closeLoading}/>
        </NavBar>
        
        <Routes>
          <Route path="Home/*" element={<Home/>}></Route>
          <Route path="Introduce/*" element={<Introduce/>}></Route>
          <Route path="Documents/*" element={<Documents/>}></Route>
          <Route path="Daily/*" element={<Daily/>}></Route>
          <Route path="Manage/*" element={<Manage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
