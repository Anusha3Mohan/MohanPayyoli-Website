// // CartContext.js
// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems(prevItems => [...prevItems, item]);
//   };

//   const removeItem = (itemId) => {
//     setCartItems(cartItems.filter(item => item.id !== itemId));
//   };

//   const clearCart = () => {
//     setCartItems([]); // Clear the cart
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeItem, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }
