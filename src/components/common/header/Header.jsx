import React, { useState } from 'react'
import './header.css'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  const mobile = window.innerWidth<=768 ? true:false;
  const [menuOpened, setMenuOpened] =  useState(false)
  return (
    <div className='header'>
      <img src={Logo} alt=""  className='logo'/>
{menuOpened=== false && mobile===true ? (
  <div style={{backgroundColor: 'white', padding: '0.5rem', borderRadius: '5px'}}
  
  onClick={() => setMenuOpened(true)}
  >
    {/* <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/> */}
    </div>
) : (
<ul className='header-menu'>
<li> 
<Link onClick={()=> setMenuOpened(false)}
to='about'
span={true}
smooth={true}>About Us</Link> 
</li>

<li>
<Link onClick={()=> setMenuOpened(false)}
to='programs'
span={true}
smooth={true}>Programs</Link> 
</li>

<li>
<Link onClick={()=> setMenuOpened(false)}
to='cohorts'
span={true}
smooth={true}>Cohorts</Link>
</li>

<li>
<Link onClick={()=> setMenuOpened(false)}
to='/startup'
span={true}
smooth={true}>Startup care</Link>
</li>

<li>
<Link onClick={()=> setMenuOpened(false)}
to='news'
span={true}
smooth={true}>News</Link>
</li>
</ul>
)}   
    </div>
  );
};

export default Header;