import React, { useState } from 'react';
import './Cart.css'; // Add CSS for styling
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0",
      description: "Beautiful Fall Road",
      size: "24x36 inches",
      price: 120.00,
    },
    {
      id: 2,
      image: "https://wallpaperaccess.com/full/4723250.jpg",
      description: "Stunning Mountain View",
      size: "18x24 inches",
      price: 90.00,
    }
  ]);

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Remove an item from the cart
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length > 0 ? (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Description</th>
                <th>Size</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.description} className="cart-item-image" />
                  </td>
                  <td>{item.description}</td>
                  <td>{item.size}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/gallery">
            <button className="continue-shopping-btn">Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
