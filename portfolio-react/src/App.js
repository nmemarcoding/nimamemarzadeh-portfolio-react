import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js'
import About from './components/about/About.js'
import Portfolio from './components/portfolio/Portfolio.js'


function App() {
  return (
    <Router>
      <div className="app">
            
            <Routes>
              <Route path="/about" element={<><Navbar/><About/></>}/> 
              <Route path="/portfolio" element={<><Navbar/><Portfolio/></>}/>

              <Route path="*" element={<><Navbar/><About/></>}/> 
            </Routes>
          </div>
    </Router>
    
  );
}
export default App;
