import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/homepage'
import ProductPage from './components/productpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'


function App() {
  

  return (
    <>
      <Navbar/>
      <HomePage/>
      <ProductPage/>
    </>
  )
}

export default App
