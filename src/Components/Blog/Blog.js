import React from 'react'
import './Blog.css'
function Blog() {
  return (
    <div className='blog pd-x' id='Blog'>
        <div className='pd-y'>
            <div className='section-title'>Latest News</div>
            <div className='section-desc'>There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration.</div>
            <div className='blog-cards cards'>
                <div className='card'>
                    <div className='overlay'></div>
                    <div className='card-content'>  
                        <p>Development</p>
                        <h5>Have You Heard? Agency Is Your Best Bet To Grow</h5>
                        <button>read more</button>
                    </div>
                </div>  
                <div className='card'>
                    <div className='card-content'>   
                        <p>Development Gallery</p>
                        <h5>Agency Works Only Under These Conditions</h5>
                        <button>read more</button>
                    </div>
                </div> 
                <div className='card'>
                    <div className='card-content'>   
                        <p>Development</p>
                        <h5>Top 10 Tips To Grow Your Agency</h5>
                        <button>read more</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Blog
