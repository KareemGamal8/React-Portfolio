import React from 'react'
import './Portfolio.css';
function Portfolio() {
  return (
    <div className='pd-x portfolio' id='Portfolio'>
        <div className='pd-y'>
            <div className='section-title'>My Latest Project</div>
            <div className='section-desc'>There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration.</div>
            <div className='cards portfolio-cards'>
                    <div className='card card-one'>
                        <div className='overlay'></div>
                        <div className='blog-card-content'>
                            <p>development</p>
                            <h5>Getting tickets to the next show</h5>
                            <button>case study</button>
                        </div>
                    </div>
                    <div className='card card-two'>
                        <div className='overlay'></div>
                        <div className='blog-card-content'>
                            <p>Freelancer</p>
                            <h5>You can see your Portfolio</h5>
                            <button>case study</button>
                        </div>
                    </div>
                    <div className='card card-three'>
                        <div className='overlay'></div>
                        <div className='blog-card-content'>
                            <p>App Development</p>
                            <h5>The Language of Developer</h5>
                            <button>case study</button>
                        </div>
                    </div>
                    <div className='card card-four'>
                    <div className='overlay'></div>
                    <div className='blog-card-content'>
                        <p>development</p>
                        <h5>How To Find The Right Agency For Your Specific Product</h5>
                        <button>case study</button>
                    </div>
                </div>
                <div className='card card-five'>
                    <div className='overlay'></div>
                    <div className='blog-card-content'>
                        <p>Mobile App</p>
                        <h5>The Ultimate Guide To Agency</h5>
                        <button>case study</button>
                    </div>
                </div>
                <div className='card card-six'>
                    <div className='overlay'></div>
                    <div className='blog-card-content'>
                        <p>development</p>
                        <h5>Getting tickets to the next show</h5>
                        <button>case study</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio