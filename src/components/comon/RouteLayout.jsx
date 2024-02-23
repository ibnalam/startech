import React from 'react'
import { Outlet } from 'react-router-dom'
import Topnav from '../layout/Topnav'
import Catagorynav from '../layout/Catagorynav'
import Footer from '../layout/Footer'

const RouteLayout = () => {
  return (
    <>
    <Topnav/>
    <Catagorynav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RouteLayout