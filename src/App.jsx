import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {
    const [showLogin,setShowLogin] = useState(false);
  return (
      <>
        {
          showLogin ? <LoginPopup setShowLogin = {setShowLogin} /> : null
        }
        <Navbar setShowLogin = {setShowLogin} />
        <Outlet></Outlet>
        <Footer />
      </>
  )
}

export default App
