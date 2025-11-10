import React from 'react';
import './ProductList.css';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
          </div>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;