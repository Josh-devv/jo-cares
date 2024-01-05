'use client'
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function GlobalState({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [add, setAdded] = useState(0)
    const [inc, setInc] =useState(1)

    const incNum = () => {
        setAdded(add + 1);
      };

     // const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
    
    function handleAddToCart(item) {
        // Check if the item already exists in the cart
    const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);

    if (!isItemInCart) {
        setCartItems(prevItems => [...prevItems, item]);
        incNum();
    } else {
        // Item already exists in the cart, you can handle this case if needed
        console.log('Item already in cart');
    }
        
    }
    function handleRemoveFromCart(itemId) {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== itemId)
        );
    }

    return (
        <CartContext.Provider value={{ cartItems, handleAddToCart, add, handleRemoveFromCart, inc, setInc }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext)
}