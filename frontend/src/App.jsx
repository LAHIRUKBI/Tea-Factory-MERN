import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/signup'
import Navigation from './Components/Navigation'
import Admin_Login from './Pages/Admin_Login'
import Admin_Home from './Pages/Admin_Home'
import Employee_register from './Pages/Employee_register'
import Stockmanager_register from './Pages/Stockmanager_register'
import Vehicles_register from './Pages/Vehicles_register'
import Employee_view from './Pages/Employee_view'
import Stockmanager_home from './Pages/Stockmanager_home'

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
      <Route path="/employeeregister" element={<Employee_register />} />
      
      <Route path="/stockmanagerregister" element={<Stockmanager_register />} />
      <Route path="/vehiclesregister" element={<Vehicles_register />} />
      <Route path="/employeeview" element={<Employee_view />} />
      <Route path="/stockmanagerhome" element={<Stockmanager_home />} />

      
    </Routes>
    </BrowserRouter>
    
  )
}
