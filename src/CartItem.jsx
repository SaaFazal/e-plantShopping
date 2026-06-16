import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.cost.substring(1)) * item.quantity;
    });
    return total.toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'green', textAlign: 'center' }}>Shopping Cart</h2>
      <h3 style={{ textAlign: 'center' }}>Total Plants in Cart: {totalQuantity}</h3>
      <h3 style={{ textAlign: 'center', color: 'green' }}>Total Cost: ${calculateTotalAmount()}</h3>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px' }}>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '15px' }}>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{item.name}</div>
              <div style={{ color: '#555' }}>Unit Price: {item.cost}</div>
              <div style={{ color: 'green', fontWeight: 'bold' }}>Subtotal: ${calculateTotalCost(item)}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => handleDecrement(item)} style={{ padding: '6px 12px', fontSize: '18px', backgroundColor: '#eee', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>-</button>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)} style={{ padding: '6px 12px', fontSize: '18px', backgroundColor: '#eee', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>+</button>
            </div>
            <button onClick={() => handleRemove(item)} style={{ padding: '8px 16px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
          </div>
        ))
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <button onClick={handleContinueShopping} style={{ padding: '12px 24px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
          Continue Shopping
        </button>
        <button onClick={handleCheckoutShopping} style={{ padding: '12px 24px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;