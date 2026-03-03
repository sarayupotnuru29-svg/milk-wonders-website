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
//   sendToWhatsApp: (userData: { 
//     name: string; 
//     phone: string; 
//     address: string;
//     coords?: { lat: number; lng: number } | null; 
//   }) => void;
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

//   const sendToWhatsApp = (userData: { 
//     name: string; 
//     phone: string; 
//     address: string;
//     coords?: { lat: number; lng: number } | null;
//   }) => {
//     if (cart.length === 0) return;

//     const items = cart
//       .map((i) => `• ${i.name} (x${i.quantity}) – ₹${i.price * i.quantity}`)
//       .join("\n");

//     /** * FIXED GOOGLE MAPS LINK:
//      * Using the standard 'https://www.google.com/maps?q=lat,lng' format 
//      * which is the most reliable for WhatsApp previews.
//      */
//     const mapLink = userData.coords 
//       ? `\n📍 *Live Location:* https://www.google.com/maps?q=${userData.coords.lat},${userData.coords.lng}`
//       : "";

//     const msg = `*NEW ORDER - MILK WONDERS*\n\n` +
//                 `*Customer Details:*\n` +
//                 `Name: ${userData.name}\n` +
//                 `Phone: ${userData.phone}\n` +
//                 `Address: ${userData.address}${mapLink}\n\n` +
//                 `*Items Ordered:*\n${items}\n\n` +
//                 `*Total: ₹${totalPrice}*\n\n` +
//                 `Please confirm my order.`;

//     const url = `https://wa.me/917396304599?text=${encodeURIComponent(msg)}`;
    
//     // Open WhatsApp
//     window.open(url, "_blank");
    
//     // Optional: Clear the cart after sending the order
//     clearCart();
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice, sendToWhatsApp }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


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
//   sendToWhatsApp: (userData: { 
//     name: string; 
//     phone: string; 
//     address: string;
//     coords?: { lat: number; lng: number } | null; 
//   }) => void;
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

//   const sendToWhatsApp = (userData: { 
//     name: string; 
//     phone: string; 
//     address: string;
//     coords?: { lat: number; lng: number } | null;
//   }) => {
//     if (cart.length === 0) return;

//     const items = cart
//       .map((i) => `• ${i.name} (x${i.quantity}) – ₹${i.price * i.quantity}`)
//       .join("\n");

//     /** * GOOGLE MAPS LINK:
//      * Corrected the template literal syntax and formatted the URL 
//      * for better WhatsApp preview compatibility.
//      */
//     const mapLink = userData.coords 
//       ? `\n📍 *Current Location:* https://www.google.com/maps?q=${userData.coords.lat},${userData.coords.lng}`
//       : "";

//     const msg = `*NEW ORDER - MILK WONDERS*\n\n` +
//                 `*Customer Details:*\n` +
//                 `Name: ${userData.name}\n` +
//                 `Phone: ${userData.phone}\n` +
//                 `Address: ${userData.address}${mapLink}\n\n` +
//                 `*Items Ordered:*\n${items}\n\n` +
//                 `*Total: ₹${totalPrice}*\n\n` +
//                 `Please confirm my order.`;

//     const url = `https://wa.me/917396304599?text=${encodeURIComponent(msg)}`;
    
//     // Open WhatsApp
//     window.open(url, "_blank");
    
//     // Clear the cart after sending the order
//     clearCart();
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

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  sendToWhatsApp: (userData: { 
    name: string; 
    phone: string; 
    address: string;
    coords?: { lat: number; lng: number } | null; 
  }) => void;
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

  const sendToWhatsApp = (userData: { 
    name: string; 
    phone: string; 
    address: string;
    coords?: { lat: number; lng: number } | null;
  }) => {
    if (cart.length === 0) return;

    const items = cart
      .map((i) => `• ${i.name} (x${i.quantity}) – ₹${i.price * i.quantity}`)
      .join("\n");

    /**
     * GOOGLE MAPS LINK:
     * Using the 'q=' query parameter ensures the pin shows up 
     * correctly on both Android and iOS WhatsApp previews.
     */
    const mapLink = userData.coords 
      ? `\n📍 *Current Location:* https://www.google.com/maps?q=${userData.coords.lat},${userData.coords.lng}`
      : "";

    const msg = `*NEW ORDER - MILK WONDERS*\n\n` +
                `*Customer Details:*\n` +
                `Name: ${userData.name}\n` +
                `Phone: ${userData.phone}\n` +
                `Address: ${userData.address}${mapLink}\n\n` +
                `*Items Ordered:*\n${items}\n\n` +
                `*Total: ₹${totalPrice}*\n\n` +
                `Please confirm my order.`;

    const url = `https://wa.me/917396304599?text=${encodeURIComponent(msg)}`;
    
    // Open WhatsApp
    window.open(url, "_blank");
    
    // Clear the cart after sending the order
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice, sendToWhatsApp }}
    >
      {children}
    </CartContext.Provider>
  );
};