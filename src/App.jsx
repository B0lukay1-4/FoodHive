import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodPage from './Pages/FoodPage';
import Home from './Components/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    // <FoodPage/>
    // <OrderPage/>
  );
}

export default App;