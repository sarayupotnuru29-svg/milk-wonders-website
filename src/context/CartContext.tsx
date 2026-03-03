// import { createContext, useContext, useState, ReactNode } from "react";

// export interface CartItem {
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: Omit<CartItem, "quantity">) => void;
//   removeFromCart: (name: string) => void;
//   clearCart: () => void;
//   totalItems: number;
//   totalPrice: number;
//   sendToWhatsApp: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const ctx = useContext(CartContext);
//   if (!ctx) throw new Error("useCart must be used within CartProvider");
//   return ctx;
// };

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (item: Omit<CartItem, "quantity">) => {
//     setCart((prev) => {
//       const existing = prev.find((i) => i.name === item.name);
//       if (existing) {
//         return prev.map((i) =>
//           i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (name: string) => {
//     setCart((prev) => {
//       const existing = prev.find((i) => i.name === name);
//       if (existing && existing.quantity > 1) {
//         return prev.map((i) =>
//           i.name === name ? { ...i, quantity: i.quantity - 1 } : i
//         );
//       }
//       return prev.filter((i) => i.name !== name);
//     });
//   };

//   const clearCart = () => setCart([]);

//   const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
//   const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

//   const sendToWhatsApp = () => {
//     if (cart.length === 0) return;
//     const items = cart
//       .map((i) => `${i.quantity}x ${i.name} – ₹${i.price * i.quantity}`)
//       .join("\n");
//     const msg = `Hello MilkWonders,\nI would like to order:\n${items}\n\nTotal: ₹${totalPrice}`;
//     const url = `https://wa.me/917396304599?text=${encodeURIComponent(msg)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice, sendToWhatsApp }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };




import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

// 1. Updated Interface to accept the form data object
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  // Updated signature to accept userData
  sendToWhatsApp: (userData: { name: string; phone: string; address: string }) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.name === name ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.name !== name);
    });
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // 2. Updated Logic to include Customer and Address details
  const sendToWhatsApp = (userData: { name: string; phone: string; address: string }) => {
    if (cart.length === 0) return;

    const items = cart
      .map((i) => `• ${i.name} (x${i.quantity}) – ₹${i.price * i.quantity}`)
      .join("\n");

    // Creating a clean, readable WhatsApp message
    const msg = `*NEW ORDER - MILK WONDERS*\n\n` +
                `*Customer Details:*\n` +
                `Name: ${userData.name}\n` +
                `Phone: ${userData.phone}\n` +
                `Address: ${userData.address}\n\n` + // <--- Address included here
                `*Items Ordered:*\n${items}\n\n` +
                `*Total: ₹${totalPrice}*\n\n` +
                `Please confirm my order.`;

    const url = `https://wa.me/917396304599?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice, sendToWhatsApp }}
    >
      {children}
    </CartContext.Provider>
  );
};