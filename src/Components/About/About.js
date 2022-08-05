import React from 'react';
import imageMain from '../images/main-img.png';
import {BrowserRouter,NavLink, Routes, Route} from 'react-router-dom';
import './About.css';
import Main from './Main'
import Awards from './Awards'
import Experience from './Experience';
import Education from './Education';
function About() {
  return (
    <BrowserRouter>
        <div className='about pd-x' id='About'>   
            <div className='about-content pd-y'>
                <div className='about-image'>
                    <img src={imageMain} alt='main' />
                </div>
                <div className='about-text'>
                    <h3 className = 'title'>about me</h3>
                    <p className='about-desc'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered <span>alteration</span> in some form, by injected humour, 
                        or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                    </p>
                    <div className='about-navbar'>
                            <NavLink to='/'>main skills</NavLink>
                            <NavLink to='/awards'>awards</NavLink>
                            <NavLink to='/experience'>experience</NavLink>
                            <NavLink to='/education'>education & certification</NavLink>
                    </div>
                    <div className='about-navbar-content'>
                       <Routes>
                        <Route path='/' element={<Main />}/>
                        <Route path='/awards' element={<Awards />}/>
                        <Route path='/experience' element={<Experience />}/>
                        <Route path='/education' element={<Education />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
  )
}

export default About