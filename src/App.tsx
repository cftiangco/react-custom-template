import './App.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './utils/Navbar';
import Footer from './utils/Footer';

import InventoryManagement from './pages/InventoryManagement';

function App() {

  return (
    <div className='font-roboto'>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/forms" element={(<h1>Form</h1>)} />
            <Route path="/dashboard" element={(<h1>Dashboard</h1>)} />
            <Route path="/inventory-management" element={<InventoryManagement />} />
            <Route path="/room-management" element={(<h1>Room Management</h1>)} />
            <Route path="/reservation-management" element={(<h1>Reservation Management</h1>)} />
            <Route path="/user-management" element={(<h1>User Management</h1>)} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
