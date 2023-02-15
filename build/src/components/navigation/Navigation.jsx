import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../images/white logo.png'
import Bars from '../images/bars.png'
import './navigation.css'

const Navigation = () => {
  const mobile = window.innerWidth<=768 ? true:false;
  const [menuOpened, setMenuOpened] =  useState(false)
  return (
    <nav className='navigation'
    style={{
      background: useLocation().pathname !== "/" ? "#1c1b1b" : ""
    }}
    >
 <NavLink to='/'>
     <img src={Logo} alt=""  className='logo'/>
     </NavLink> 
{menuOpened=== false && mobile===true ? (
  <div style={{backgroundColor: 'white', padding: '0.5rem', borderRadius: '5px'}}
  onClick={() => setMenuOpened(true)}
  >
    <img src={Bars} alt="" className='bars' style={{ width: '1.5rem', height: '1.5rem'}}/>
    </div>
) : (
<ul className='navigation-menu'>
<li> 
<NavLink exact activeClassName="active"
onClick={()=> setMenuOpened(false)}
to='/'
span={true}
smooth={true}>Home</NavLink> 
</li>

<li>
<NavLink exact activeClassName="active"
onClick={()=> setMenuOpened(false)}
to='/programs'
span={true}
smooth={true}>Programs</NavLink> 
</li>

<li>
<NavLink exact activeClassName="active" 
onClick={()=> setMenuOpened(false)}
to='/cohorts'
span={true}
smooth={true}>Cohorts</NavLink>
</li>

<li>
<NavLink exact activeClassName="active"
onClick={()=> setMenuOpened(false)}
to='/pages'
span={true}
smooth={true}>Startup care</NavLink>
</li>

<li>
<NavLink exact activeClassName="active" 
 onClick={()=> setMenuOpened(false)}
to='/news'
span={true}
smooth={true}><span>News</span></NavLink>
</li>
</ul>
)} 
   </nav>
  );
};

export default Navigation