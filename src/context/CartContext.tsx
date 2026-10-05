"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, OrderDetails } from "@/types";

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    item: Omit<CartItem, "quantity" | "totalPrice"> & {
      quantity?: number;
    }
  ) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  lastOrder: OrderDetails | null;
  setLastOrder: (order: OrderDetails) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  hideToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("happiness_deliver_cart");
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  const [lastOrder, setLastOrderState] = useState<OrderDetails | null>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("happiness_deliver_last_order");
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return null;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("happiness_deliver_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  const addToCart = (
    item: Omit<CartItem, "quantity" | "totalPrice"> & {
      quantity?: number;
    }
  ) => {
    const qty = item.quantity || 1;
    const addonsTotal = item.selectedAddons.reduce(
      (sum, addon) => sum + addon.price,
      0
    );
    const itemUnitPrice = item.price + addonsTotal;
    const itemTotalPrice = itemUnitPrice * qty;

    const newItem: CartItem = {
      ...item,
      quantity: qty,
      totalPrice: itemTotalPrice,
    };

    setCart((prev) => [...prev, newItem]);
    showToast(`"${item.title}" added to your surprise cart! ✨`);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast("Item removed from cart");
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }
    setCart((prev) => {
      const newCart = [...prev];
      const item = newCart[index];
      const addonsTotal = item.selectedAddons.reduce(
        (sum, addon) => sum + addon.price,
        0
      );
      const unitPrice = item.price + addonsTotal;
      newCart[index] = {
        ...item,
        quantity,
        totalPrice: unitPrice * quantity,
      };
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const setLastOrder = (order: OrderDetails) => {
    setLastOrderState(order);
    try {
      localStorage.setItem("happiness_deliver_last_order", JSON.stringify(order));
    } catch (e) {
      console.error("Failed to save order", e);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        lastOrder,
        setLastOrder,
        toastMessage,
        showToast,
        hideToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
