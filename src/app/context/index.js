'use client'
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function GlobalState({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [add, setAdded] = useState(0)

    const incNum = () => {
        setAdded(add + 1);
      };
    
    function handleAddToCart(item) {
        setCartItems(prevItems => [...prevItems, item]);   
        incNum()
    }
    function handleRemoveFromCart(itemId) {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== itemId)
        );
    }

    return (
        <CartContext.Provider value={{ cartItems, handleAddToCart, add, handleRemoveFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext)
}