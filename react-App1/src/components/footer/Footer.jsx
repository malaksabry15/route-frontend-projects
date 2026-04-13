import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../footer/footer.module.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className={`container-fluid ${style.bg}  pt-5 px-0 text-center text-white`}>
    <div className='container '>
        <div className="row p-5">
            <div className="col-md-4">
                <div className="inner">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="inner">
                <h3>AROUND THE WEB</h3>
                <div className="icons text-white">
                    <span className={` p-1 mx-1  ${style.border}`} ><i class="fa-brands fa-facebook "></i></span>
                    <span className={` p-1 mx-1  ${style.border}`}><i class="fa-brands fa-twitter"></i></span>
                    <span className={` p-1 mx-1  ${style.border}`}><i class="fa-brands fa-linkedin-in"></i></span>
                    <span className={` p-1 mx-1  ${style.border}`}><i class="fa-solid fa-globe"></i></span>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="inner">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
            </div>
        </div>
        
        
      
    </div>
    <div className={`px-5 py-3 ${style.bg2} `} >
            <p>Copyright © Your Website 2021</p>
        </div>
    </div>
  )
}

export default Footer
