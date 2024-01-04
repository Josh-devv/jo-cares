'use client'
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function GlobalState({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function handleAddToCart(item) {
        setCartItems(prevItems => [...prevItems, item]);
    console.log(item);
    }
    return (
        <CartContext.Provider value={{ cartItems, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext)
}