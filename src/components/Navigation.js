import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/homepage'
import About from '../pages/about'
import Contact from '../pages/contact'
import Login from '../pages/login'
import Signup from '../pages/signup'

export default function Navigation() {
  return (
    <Routes>
            <Route exact path="/" element={<Homepage/>} />
            {/* <Route exact path="/aboutUs" element={<About/>} /> */}
            {/* <Route exact path="/contact" element={<Contact/>} /> */}
            {/* <Route exact path="/login" element={<Login/>} /> */}
            {/* <Route exact path="/signup" element={<Signup/>} /> */}
    </Routes>
  )
}