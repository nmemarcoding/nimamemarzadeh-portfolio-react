import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js'
import About from './components/about/About.js'


function App() {
  return (
    <Router>
      <div className="app">
            
            <Routes>
              <Route path="/about" element={<><Navbar/><About/></>}/> 


              <Route path="*" element={<><Navbar/><About/></>}/> 
            </Routes>
          </div>
    </Router>
    
  );
}
export default App;
