import React from 'react'
import Header from './components/hearder/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { ManuProvider } from './context/ManuContex'

function App() {
  return (
    <>
    <ManuProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    </ManuProvider>
    </>
  )
}

export default App