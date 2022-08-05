import React from 'react';
import './Navbar.css';
import {BrowserRouter,NavLink} from 'react-router-dom';
import Logo from '../images/logo-symbol-dark.png';
function Navbar() {

    return (
        <div className="navbar">
                <div className='navbar-content pd-x'>
                    <div className='navbar-links'>
                        <img src={Logo} alt='Logo' className='logo'/>
                        <div className='links'>
                           <BrowserRouter>
                                <NavLink to="/">Home <span></span></NavLink>
                                <NavLink to="/About">About <span></span></NavLink>
                                <NavLink to="/Services">Services <span></span></NavLink>
                                <NavLink to="/Portfolio">Portfolio <span></span></NavLink>
                                <NavLink to="/Blog">Blog <span></span></NavLink>
                                <NavLink to="/Contact">Contact <span></span></NavLink>
                           </BrowserRouter>
                        </div>
                        </div>
                        <div className='navbar-icons'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
        </div>
    )
}

export default Navbar;