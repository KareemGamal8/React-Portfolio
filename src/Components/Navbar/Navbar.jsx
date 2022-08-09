import React, {useState, useEffect} from 'react';
import './Navbar.css';
import Logo from '../images/logo-symbol-dark.png';
function Navbar() {
    const [navScroll, setNavScroll] = useState(true);
    const [navHandler, setNavHandler] = useState(false);
    const btnHandler = () => setNavHandler(!navHandler); 
    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 500) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        }
        window.addEventListener("scroll", changeBackground);
    })
    return (
        <div className={navScroll ? "nav-scroll" : "navbar"}>
                <div className='navbar-content pd-x'>
                    <div className='navbar-links'>
                        <img src={Logo} alt='Logo' className='logo'/>
                        <div className={navHandler ? "links" : "links-hidden"}>
                                <ul>
                                    <li><a href='#Home'>Home<span></span></a></li>
                                    <li><a href='#About'>About <span></span></a></li>
                                    <li><a href='#Services'>Services <span></span></a></li>
                                    <li><a href='#Portfolio'>Portfolio <span></span></a></li>
                                    <li><a href='#Blog'>Blog <span></span></a></li>
                                    <li><a href='#Contact'>Contact <span></span></a></li>
                                </ul>
                        </div>
                    </div>
                        <div className='navbar-icons'>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                            <div className='navbar-bars'>
                                <a href="javascript:void(0);" className="icon" onClick={btnHandler}>
                                    <i className="fa fa-bars"></i>
                                </a>
                            </div>
                </div>
        </div>
    )
}

export default Navbar;