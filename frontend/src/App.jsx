import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Navigator from './components/navigator'
import DetailPackage from './pages/DetailPackage'
import MyProfile from './pages/MyProfile'
import GeneralInquery from './pages/GeneralInquery'
import SpecialInquery from './pages/SpecialInquery'
import HelpAndSupport from './pages/HelpAndSupport'

const App = () => {
  return (
    <div>
      <Navigator />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/help-and-support' element={<HelpAndSupport />} />
        <Route path='/general-inquery' element={<GeneralInquery />} />
        <Route path='/special-inquery' element={<SpecialInquery />} />
        <Route path='/detail-package/:id' element={<DetailPackage />} />
      </Routes>
    </div>
  )
}

export default App

