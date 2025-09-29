import React from 'react'
import Home from './portfolio/Home'
import { Route, Routes } from 'react-router-dom'
import CloneProject from './portfolio/project/Clone'
import PetFoodEcommerce from './portfolio/project/Ecommerce'

function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='clone' element={<CloneProject/>}/>
      <Route path='petfood' element={<PetFoodEcommerce/>}/>
    </Routes>
    </>
  )
}

export default App
