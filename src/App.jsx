import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Orders/Order';

function App() {
  const url = "https://food-app-backend-7mqq.onrender.com"
  
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/orders' element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App