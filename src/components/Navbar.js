import React from 'react';
import './navbar.css'
import logo from '../../src/assets/logo.jpg';
import contact from '../../src/assets/contact.jpg';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <nav className="Navbar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='tech' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Techstack</Link>
            <Link activeClass='active' to='techh' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Projects</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Client</Link>
        </div>
    </nav>
  )
}

export default Navbar;