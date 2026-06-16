import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div>
      {!showProductList ? (
        <div className="app-container">
          <div className="landing-page">
            <h1 className="company-name">Paradise Nursery</h1>
            <p className="company-description">
              Welcome to Paradise Nursery, where green dreams come to life! We are passionate about 
              bringing the beauty and tranquility of nature into your home. Whether you are looking for 
              aromatic herbs, medicinal plants, or stunning decorative varieties, we have something for 
              every plant lover. Let us help you create your own little paradise, one plant at a time.
            </p>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
