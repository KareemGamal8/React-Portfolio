import React from 'react';
import imageMain from '../images/main-img.png';

import './About.css';
function About() {
  return (
    <div className='about pd-x'>   
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
              
                <div className='about-navbar-content'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                </div>
            </div>
        </div>
    </div>
  )
}

export default About