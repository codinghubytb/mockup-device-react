import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import deviceData from './data/device.json';
import Home from './Home';
import EditMockup from './EditMockup';

function App() {
  return (
    <Router>
      <div className='bg-gray-100 min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditMockup />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
