import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './header.css'
import Logo from '../../images/logo.png'
import Bars from '../../images/bars.png'
const Header = () => {
  const mobile = window.innerWidth<=768 ? true:false;
  const [menuOpened, setMenuOpened] =  useState(false)
  return (
    <div className='header'>
       <nav
    style={{
      background: useLocation().pathname !== "/" ? "rgba(2, 2, 2, 0.73)" : ""
    }}
  >
    <NavLink to='/'>
     <img src={Logo} alt=""  className='logo'/>
     </NavLink>
    <div className="blur hero-blur"></div>
{menuOpened=== false && mobile===true ? (
  <div style={{backgroundColor: 'white', padding: '0.5rem', borderRadius: '5px'}}
  
  onClick={() => setMenuOpened(true)}
  >
    <img src={Bars} alt="" className='bars' style={{ width: '1.5rem', height: '1.5rem'}}/>
    </div>
) : (
<ul className='header-menu'>
<li> 
<NavLink exact activeClassName="active"
onClick={()=> setMenuOpened(false)}
to='about'
span={true}
smooth={true}>About Us</NavLink> 
</li>

<li>
<NavLink exact activeClassName="active"
onClick={()=> setMenuOpened(false)}
to='programs'
span={true}
smooth={true}>Programs</NavLink> 
</li>

<li>
<NavLink exact activeClassName="active" 
onClick={()=> setMenuOpened(false)}
to='cohorts'
span={true}
smooth={true}>Cohorts</NavLink>
</li>

<li>
<NavLink exact activeClassName="active"
onClick={()=> setMenuOpened(false)}
to='pages'
span={true}
smooth={true}>Startup care</NavLink>
</li>

<li>
<NavLink exact activeClassName="active" 
 onClick={()=> setMenuOpened(false)}
to='news'
span={true}
smooth={true}><span>News</span></NavLink>
</li>
<button className='btn'>Enroll Now</button>
</ul>
)} 
</nav>
    </div>
  );
};

export default Header;