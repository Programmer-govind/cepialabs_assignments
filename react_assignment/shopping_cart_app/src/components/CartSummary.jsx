import React from 'react';
import './CartSummary.css';

function CartSummary({ totalPrice, totalItems }) {
  return (
    <div className="cart-summary">
      <div className="summary-header">
        <h3>Cart Summary</h3>
      </div>
      
      <div className="summary-details">
        <div className="summary-row">
          <span>Total Items:</span>
          <span className="summary-value">{totalItems}</span>
        </div>
        
        <div className="summary-row total-row">
          <span>Total Price:</span>
          <span className="summary-value total-price">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;