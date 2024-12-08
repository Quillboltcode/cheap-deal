import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Navigator from './components/navigator'
import DetailPackage from './pages/DetailPackage'

const App = () => {
  return (
    <div>
      <Navigator />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/detail-package/:id' element={<DetailPackage />} />
      </Routes>
    </div>
  )
}

export default App

