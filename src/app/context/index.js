'use client'
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function GlobalState({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [add, setAdded] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0);
    const [inc, setInc] =useState(1)

    const incNum = () => {
        setAdded(add + 1);
      };

     // const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
    
    function handleAddToCart(item) {
        // Check if the item already exists in the cart
    const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);

    if (!isItemInCart) {
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
        setTotalPrice((prevPrice) => prevPrice + item.price); // Update total price
        incNum();
        
    } else {
    // If item already exists, update its quantity and total price
        const updatedCartItems = cartItems.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
            setCartItems(updatedCartItems);
            setTotalPrice((prevPrice) => prevPrice + item.price); // Update total price
            }
    
    
        
    }
    
    const handleRemoveFromCart = (itemId, itemPrice, itemQuantity) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
        setTotalPrice((prevPrice) => prevPrice - itemPrice * itemQuantity); // Update total price
    };


    return (
        <CartContext.Provider value={{ cartItems, handleAddToCart, add, handleRemoveFromCart, inc, setInc, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext)
}