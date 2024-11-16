import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/signup'
import Navigation from './Components/Navigation'
import Admin_Login from './Pages/Admin_Login'
import Admin_Home from './Pages/Admin_Home'

export default function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin_Login />} />
      <Route path="/adminhome" element={<Admin_Home />} />
    </Routes>
    </BrowserRouter>
    
  )
}
