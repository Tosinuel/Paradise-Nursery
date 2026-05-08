import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Navbar from '../components/Navbar';
import './ProductListingPage.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar cartCount={totalItems} />
      <h2 className="slide-up">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">Your cart is empty.</div>
      ) : (
        <div className="plant-list">
          {cart.map(item => (
            <div className="plant-card fade-in" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Unit Price: ${item.price}</p>
              <div className="cart-controls">
                <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)} className="delete-btn">Delete</button>
              </div>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost}</p>
        <button className="checkout-btn" disabled={cart.length === 0}>Checkout</button>
      </div>
    </>
  );
}
