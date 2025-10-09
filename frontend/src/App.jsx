import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Login from './pages/Login' // Comment if Login doesn't exist
import Registartion from './pages/Registartion'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/login' element={<Login />} /> */}
      <Route path='/sinup' element={<Registartion />} />
    </Routes>
  )
}

export default App
