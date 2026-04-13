import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Sidebar from '../sidabar/Sidebar'
import Card from '../card/card'

const Layout = ({getdata , getCategoryMeals, meals}) => {
  return <>
  <Sidebar />
  
  <Outlet/>

  <Footer/>
  </>
}

export default Layout
