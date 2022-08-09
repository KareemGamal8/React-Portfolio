import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
function Home() {
  return (
    <div id='Home'>

        <div className='home'>
        <Navbar />

            <div className='home-content pd-x'>
                <p>FREELANCE DIGITAL DESIGNER</p>
                <h1>hello, i'm <span>Kareem</span> welcome to my world.</h1>
              </div>
          </div>
        </div>
  )
}

export default Home