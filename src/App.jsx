import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodPage from './FoodPage';
import Home from './Home';
import OrderPage from './OrderPage';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
    // <FoodPage/>
    // <OrderPage/>
  );
}

export default App;