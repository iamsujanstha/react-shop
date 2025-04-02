import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import { Layout } from './components/layouts/MainLayout';
import ProductDetails from './components/core/product-detail/ProductDetails';

const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="*"
            element={<div style={{ padding: "20px" }}>Please select a product from the list.</div>}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
