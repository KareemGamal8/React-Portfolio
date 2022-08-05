import React from 'react'
import './Services.css'
function Services() {
  return (
    <div className='services pd-x'>
      <div className='pd-y'>
        <h4 className='section-title'>My Awesome Service</h4>
        <p className='section-desc'>There are many variations of passages of Lorem Ipsum available, but <br/> the majority have suffered alteration.</p>
        <div className='cards'>
            <div className='card'>
              <i class="fa-solid fa-laptop"></i>
              <div className='card-title'>buisness stratagy</div>
              <div className='card-desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
            </div>
            <div className='card'>
              <i class="fa-solid fa-layer-group"></i>
              <div className='card-title'>web development</div>
              <div className='card-desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
            </div>
            <div className='card'>
              <i className="fa-solid fa-user-group"></i>
              <div className='card-title'>marketing & reporting</div>
              <div className='card-desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
            </div>
        </div>
        <div className='cards'>
              <div className='card'>
                <i className="fa-solid fa-display"></i>
                <div className='card-title'>mobile development</div>
                <div className='card-desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
              </div>
              <div className='card'>
                <i className="fa-solid fa-camera"></i>
                <div className='card-title'>marketing & reporting</div>
                <div className='card-desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
              </div>
              <div className='card'>
                <i className="fa-solid fa-mobile"></i>
                <div className='card-title'>mobile development</div>
                <div className='card-desc'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Services