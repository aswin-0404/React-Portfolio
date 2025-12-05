import React from 'react'
import Home from './portfolio/Home'
import { Route, Routes } from 'react-router-dom'
import CloneProject from './portfolio/project/Clone'
import PetFoodEcommerce from './portfolio/project/Ecommerce'
import Slms from './portfolio/project/SLMS'
import Ecommercebackend from './portfolio/project/Pawchawbackend'

function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='clone' element={<CloneProject/>}/>
      <Route path='petfood' element={<PetFoodEcommerce/>}/>
      <Route path='SLMS' element={<Slms/>}/>
      <Route path='ecommerce' element={<Ecommercebackend/>}/>
    </Routes>
    </>
  )
}

export default App
