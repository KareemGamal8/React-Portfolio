import React, {useState, useEffect} from 'react';
import './Navbar.css';
import Logo from '../images/logo-symbol-dark.png';
function Navbar() {
    const [navScroll, setNavScroll] = useState(false);
    useEffect(() => {
        const changeBackgound = () => {
            if (window.scrollY >= 500) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        }
        window.addEventListener("scroll", changeBackgound);
    })
    return (
        <div className={navScroll ? "nav-scroll" : "navbar"}>
                <div className='navbar-content pd-x'>
                    <div className='navbar-links'>
                        <img src={Logo} alt='Logo' className='logo'/>
                        <div className='links'>
                                <a href='#Home'>Home<span></span></a>
                                <a href='#About'>About <span></span></a>
                                <a href='#Services'>Services <span></span></a>
                                <a href='#Portfolio'>Portfolio <span></span></a>
                                <a href='#Blog'>Blog <span></span></a>
                                <a href='#Contact'>Contact <span></span></a>
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