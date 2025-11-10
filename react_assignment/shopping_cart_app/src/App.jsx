import { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'
import './App.css'

// Sample product data as provided in assignment
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 599 },
  { id: 3, name: 'Headphones', price: 199 }
];

function App() {
  // Initialize cart from localStorage or empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new item, add with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update quantity (bonus feature)
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculate total items count
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Shopping Cart App</h1>
        <p>Practice state management and component communication</p>
      </header>

      <div className="app-content">
        <div className="products-section">
          <h2>Available Products</h2>
          <ProductList 
            products={products} 
            onAddToCart={addToCart} 
          />
        </div>

        <div className="cart-section">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <p>Add some products to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={removeFromCart}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </div>
              <CartSummary 
                totalPrice={getTotalPrice()}
                totalItems={getTotalItems()}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// CartItem component (individual cart item with remove button)
function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        <p className="item-price">${item.price}</p>
      </div>
      
      <div className="quantity-controls">
        <button 
          className="quantity-btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>

      <div className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      <button 
        className="remove-btn"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default App