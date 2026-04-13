import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Sidebar from '../sidabar/Sidebar'


const Layout = ({getdata , getCategoryMeals, meals}) => {
  return <>
  <Sidebar />
  
  <Outlet/>

  <Footer/>
  </>
}

export default Layout
