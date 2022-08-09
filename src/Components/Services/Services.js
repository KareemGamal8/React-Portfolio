import React from 'react'
import './Services.css'
import Cards from './Cards'
function Services() {
  return (
    <div className='services pd-x' id="Services">
      <div className='pd-y'>
        <h4 className='section-title'>My Awesome Service</h4>
        <p className='section-desc'>There are many variations of passages of Lorem Ipsum available, but <br/> the majority have suffered alteration.</p>
        <div className='cards'>
            <div className='card'>  
              <Cards 
                icon="fa-solid fa-layer-group" 
                title="web development" 
                desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered." 
                />
            </div>
            <div className='card'>  
              <Cards 
                icon="fa-solid fa-layer-group" 
                title="web development" 
                desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered." 
                />
            </div>
            <div className='card'>  
              <Cards 
                icon="fa-solid fa-layer-group" 
                title="web development" 
                desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered." 
                />
            </div>
            <div className='card'>  
              <Cards 
                icon="fa-solid fa-layer-group" 
                title="web development" 
                desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered." 
                />
            </div>
            <div className='card'>  
              <Cards 
                icon="fa-solid fa-layer-group" 
                title="web development" 
                desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered." 
                />
            </div>
            <div className='card'>  
              <Cards 
                icon="fa-solid fa-layer-group" 
                title="web development" 
                desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered." 
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services