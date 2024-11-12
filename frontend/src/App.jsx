import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

