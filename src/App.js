import React from 'react'
import Header from './components/hearder/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App