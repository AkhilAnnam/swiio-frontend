import React from 'react'
import Header from './Components/Header/Header'
import Mac from './Components/Mac/Mac'
import Custom from './Components/Custom/Custom'
import CheckoutForm from './Components/input/input'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Artwork from './Components/Artwork/Artwork'
import Integration from './Components/Integration/Integration'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard'
const stripePromise = loadStripe('pk_test_51PIv5ISHogaXr4t3gPnciYYuH6BIKmhd6w4mnGjrrVSnmgCLuYOxu1W9a8QUanUfKbeWYejHQ5boiCOKRY0asqgO00FOXGalAF');
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/checkout' element={<CheckoutForm/>} />
      
      </Routes>
       
    

    </div>
  )
}

export default App
