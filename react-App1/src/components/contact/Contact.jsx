import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import contactStyle from '../contact/contact.module.css'

const Contact = () => {
  const [nameActive, setNameaActive] = useState(false)
    const [ageActive, setaAgeActive] = useState(false)
  const [emailActive, setaEmailActive] = useState(false)

    const [passwordActive, setPasswordActive] = useState(false)

  
  return (
    <div className={` my-5 `} >
      <div className="container" style={{marginTop:'86px'}}>
<div>
                <h2 className=' mb-2 pt-5 text-center fw-bolder fs-1 text-uppercase '>conatct section</h2>
                <div className='my-3 d-flex align-items-center justify-content-center'>
                  <div className={`${contactStyle.line}`} ></div>
                  <i class={`fa-solid fa-star ${contactStyle.star}`}></i>
                  <div className={`${contactStyle.line}`}></div>
                </div>
                </div> 
        <div className="row">
            <form className=' w-75 mx-auto' >
              <label htmlFor="name" className={`${nameActive? contactStyle.onInputLabel:contactStyle.label }  position-relative`} >userName: </label>
                <input onInput={(e)=>{setNameaActive(e.target.value.length>0)}}  type="text" name='name' id="name" placeholder='userName' className=' form-control my-3 border-0 border-bottom position-relative '/>
                <label htmlFor="age" className={`${ageActive? contactStyle.onInputLabel:contactStyle.label }  position-relative`}>userAge: </label>
                <input onInput={(e)=>{setaAgeActive(e.target.value.length>0)}} id="age" type="number" name='age' placeholder='userAge' className='  form-control my-3 border-0 border-bottom position-relative ' />
                <label htmlFor="email" className={`${emailActive? contactStyle.onInputLabel:contactStyle.label }  position-relative`}>userEmail: </label>
                <input onInput={(e)=>{setaEmailActive(e.target.value.length>0)}} id="email" type="Email" name='email' placeholder='userEmail' className='  form-control my-3 border-0 border-bottom position-relative ' />
                <label htmlFor="password" className={`${passwordActive? contactStyle.onInputLabel:contactStyle.label }  position-relative`}>userPassword: </label>
                <input onInput={(e)=>{setPasswordActive(e.target.value.length>0)}} id="password" type="password" name='password'placeholder='userPassword' className='  form-control my-3 border-0 border-bottom position-relative ' />
                <button className={`my-2 text-white border-0 p-2 rounded-2 ${contactStyle.btn}`}>send message</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
