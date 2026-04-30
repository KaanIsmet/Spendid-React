import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
      </Routes>
    </Router>
  )
}
export default App
