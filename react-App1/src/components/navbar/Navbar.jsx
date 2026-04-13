import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../navbar/navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [scroll, setscroll] = useState(false)
    useEffect(()=>{
        let scroll=()=>{
            if(window.scrollY>20){
                setscroll(true)
            }
            else{
                setscroll(false)
            }
        }
        window.addEventListener('scroll',scroll)
        return()=>{window.removeEventListener('scroll',scroll)}
    },[])
  return (
  
    <nav className={`${style.navbar} navbar navbar-expand-lg ${scroll==true?'py-1':"py-4"}  px-5 fixed-top z-2  `} >
  <div className="container-fluid">
    <Link className="navbar-brand fs-2 fw-bolder text-uppercase" to="#">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? `nav-link fw-bolder mx-2 ${style.active} ` : ` nav-link fw-bolder mx-2 `  }  aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? `nav-link fw-bolder mx-2  ${style.active}` : "nav-link fw-bolder mx-2 "} to="portfoilo">PORTFOILO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? `nav-link fw-bolder mx-2  ${style.active}` : "nav-link fw-bolder mx-2 "} to="contact">CONTACT</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar


