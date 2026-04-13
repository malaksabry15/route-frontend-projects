import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import aboutStyle from '../about/about.module.css'

const About = () => {
  return (
    <div className={`py-5 px-5   d-flex align-items-center flex-column justify-content-center ${aboutStyle.bg} ${aboutStyle.color}`} style={{marginTop:'86px'}}>
        
        <div className="container px-5 py-5 " >
          <div>
                <h2 className={`mb-2 pt-5 text-center fw-bolder fs-1 text-uppercase ${aboutStyle.h2}`} >about component</h2>
                <div className='my-3 d-flex align-items-center justify-content-center'>
                  <div className={`${aboutStyle.line}`} ></div>
                  <i class="fa-solid fa-star"></i>
                  <div className={`${aboutStyle.line}`}></div>
                </div>
                </div>
                <div className="row px-5 pb-5 ">
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                     <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
        </div>
                
                
    </div>
              
  )
}

export default About
