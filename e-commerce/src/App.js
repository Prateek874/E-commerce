import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Signup from './components/Signup';
import Login from './components/Login';
import DisplayCart from './components/displayCart';
import Navbar from './components/Navbar';
import PrivateComponent from './components/PrivateComponent';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public routes (no authentication required) */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />

          {/* Protected routes (authentication required) */}

          <Route element={<PrivateComponent />}>
          <Route
            path="/home"
            element={<ProductList />}
          />
           
          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/cart"
            element={<DisplayCart />}
          />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
