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
import Employee_home from './Pages/Employee_home'
import Staffmanager_home from './Pages/Staffmanager_home'
import Vehiclemanager_home from './Pages/Vehiclemanager_home'
import Deliverymanager_home from './Pages/Deliverymanager_home'
import Add_product from './Pages/Add_product'
import Add_stocks from './Pages/Add_stocks'
import View_product from './Pages/View_product'
import Product_update from './Pages/Product_update'

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
      <Route path="/employeehome" element={<Employee_home />} />
      <Route path="/staffmanagerhome" element={<Staffmanager_home />} />
      <Route path="/vehiclemanagerhome" element={<Vehiclemanager_home />} />
      <Route path="/deliverymanagerhome" element={<Deliverymanager_home />} />
      <Route path="/addproduct" element={<Add_product />} />
      <Route path="/addstock" element={<Add_stocks />} />
      <Route path="/productview" element={<View_product />} />
      <Route path="/updateproduct" element={<Product_update />} />

      
    </Routes>
    </BrowserRouter>
    
  )
}
