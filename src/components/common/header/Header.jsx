import React, { useState } from 'react'
import './header.css'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import Bars from '../../images/bars.png'
const Header = () => {
  const mobile = window.innerWidth<=768 ? true:false;
  const [menuOpened, setMenuOpened] =  useState(false)
  return (
    <div className='header'>
    <Link to='/'>
     <img src={Logo} alt=""  className='logo'/>
     </Link>
    <div className="blur hero-blur"></div>
{menuOpened=== false && mobile===true ? (
  <div style={{backgroundColor: 'white', padding: '0.5rem', borderRadius: '5px'}}
  
  onClick={() => setMenuOpened(true)}
  >
    <img src={Bars} alt="" className='bars' style={{width: '1.5rem', height: '1.5rem'}}/>
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
to='pages'
span={true}
smooth={true}>Startup care</Link>
</li>

<li>
<Link onClick={()=> setMenuOpened(false)}
to='news'
span={true}
smooth={true}><span>News</span></Link>
</li>
<button className='btn'>Enroll Now</button>
</ul>
)}   
    </div>
  );
};

export default Header;