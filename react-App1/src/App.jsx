import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/about/About'
import Portfoilo from './components/portfoilo/Portfoilo'
import Contact from './components/contact/Contact'
import Home from './components/Home/Home'
import Layout from './components/Layout'

 let x=createBrowserRouter([
  {path:'', element:<Layout/>,children:[
    {
    index:true,element:<Home/>
  },
  {
    path:'about',element:<About/>
  },
  {
    path:'portfoilo',element:<Portfoilo/>
  },
  {
    path:'contact',element:<Contact/>
  }
  ]},
  
 ])


function App() {


  return (
    
    <>
  <RouterProvider router={x}></RouterProvider>
    
      
    </>
  )
}

export default App
