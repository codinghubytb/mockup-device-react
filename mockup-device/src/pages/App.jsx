
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditMockup from './EditMockup';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <div className='bg-gray-100 min-h-screen'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/edit" element={<EditMockup />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
