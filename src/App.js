import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Catalog from './Pages/Catalog/Catalog.jsx';
import ProductPage from './Pages/ProductPage/ProductPage.jsx';
import CartPage from './Pages/CartPage/CartPage.jsx';
import Registration from './Pages/Registration/Registration.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;