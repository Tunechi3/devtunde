import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Resume from './pages/Resume'
import Landing from './pages/Landing'

function App() {
  


  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<Resume/>} />
       
      </Routes>
  
  )
}

export default App
