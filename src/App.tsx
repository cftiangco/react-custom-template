import './App.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './utils/Navbar';
import Footer from './utils/Footer';

import InventoryManagement from './pages/InventoryManagement';
import Forms from './pages/Forms';
import UserManagement from './pages/UserManagement';
import ReservationManagement from './pages/ReservationManagement';
import Dashboard from './pages/Dashboard';
import RoomManagement from './pages/RoomManagement';

function App() {

  return (
    <div className='font-roboto'>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/forms" element={<Forms/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/inventory-management" element={<InventoryManagement />} />
            <Route path="/room-management" element={<RoomManagement/>} />
            <Route path="/reservation-management" element={<ReservationManagement/>} />
            <Route path="/user-management" element={<UserManagement/>} />
        </Routes> 
        <Footer />
      </Router>
    </div>
  )
}

export default App
