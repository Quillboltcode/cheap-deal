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
import Packages from './pages/Packages'
import Cart from './pages/Cart'
import Deals from './pages/Deals'
import DetailDeal from './pages/DetailDeal'
import SpecialInqueryDeal from './pages/SpecialInqueryDeal'

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
        <Route path='/special-inquery/deal' element={<SpecialInqueryDeal />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/packages/:type' element={<Packages />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail-package/:id' element={<DetailPackage />} />
        <Route path='/detail-deal/:id' element={<DetailDeal />} />
      </Routes>
    </div>
  )
}

export default App

