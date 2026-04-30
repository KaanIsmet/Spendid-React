import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/dashboard' element={<DashboardPage />}/>
      </Routes>
    </Router>
  )
}
export default App
