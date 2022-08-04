import React from 'react'
import './Navbar.css'
import Logo from '../images/logo-symbol-dark.png'
function Navbar() {

    return (
        <div className="navbar">
                <div className='navbar-content pd-x'>
                    <div className='navbar-links'>
                        <img src={Logo} alt='Logo' className='logo'/>
                        <div className='links'>
                            <a href="/">Home <span></span></a>
                            <a href="/">About <span></span></a>
                            <a href="/">Services <span></span></a>
                            <a href="/">Portfolio <span></span></a>
                            <a href="/">Blog <span></span></a>
                            <a href="/">Contact <span></span></a>
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