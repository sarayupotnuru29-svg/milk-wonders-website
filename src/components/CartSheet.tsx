// import { useState } from "react";
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import { ShoppingCart, Trash2, Plus, Minus, MapPin, User, Phone } from "lucide-react";
// import { useCart } from "@/context/CartContext";

// const CartSheet = () => {
//   const { cart, totalItems, totalPrice, sendToWhatsApp, removeFromCart, addToCart } = useCart();
  
//   // State for delivery details
//   const [addressForm, setAddressForm] = useState({
//     name: "",
//     phone: "",
//     address: ""
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setAddressForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleOrder = () => {
//     if (!addressForm.name || !addressForm.phone || !addressForm.address) {
//       alert("Please fill in all delivery details before ordering.");
//       return;
//     }
//     // Passing the form data to the WhatsApp function
//     sendToWhatsApp(addressForm);
//   };

//   const isFormValid = addressForm.name && addressForm.phone && addressForm.address;

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <button
//           className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
//           aria-label="Cart"
//         >
//           <ShoppingCart className="h-5 w-5 text-primary" />
//           {totalItems > 0 && (
//             <span className="absolute -top-1 -right-1 gradient-green text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
//               {totalItems}
//             </span>
//           )}
//         </button>
//       </SheetTrigger>
//       <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
//         <SheetHeader className="pb-4 border-b border-border">
//           <SheetTitle className="font-heading text-xl">Your Cart</SheetTitle>
//         </SheetHeader>

//         {cart.length === 0 ? (
//           <div className="flex-1 flex items-center justify-center">
//             <div className="text-center">
//               <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
//               <p className="text-muted-foreground">Your cart is empty</p>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* Scrollable Area: Cart Items + Address Form */}
//             <div className="flex-1 overflow-y-auto py-4 space-y-6 pr-1">
//               {/* Cart Items List */}
//               <div className="space-y-3">
//                 <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Items</h3>
//                 {cart.map((item) => (
//                   <div
//                     key={item.name}
//                     className="flex items-center gap-3 bg-secondary rounded-lg p-3"
//                   >
//                     <div className="flex-1 min-w-0">
//                       <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
//                       <p className="text-sm text-primary font-semibold">₹{item.price} each</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => removeFromCart(item.name)}
//                         className="p-1 rounded hover:bg-muted transition-colors"
//                       >
//                         {item.quantity === 1 ? (
//                           <Trash2 className="h-4 w-4 text-destructive" />
//                         ) : (
//                           <Minus className="h-4 w-4 text-foreground" />
//                         )}
//                       </button>
//                       <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
//                       <button
//                         onClick={() => addToCart({ name: item.name, price: item.price })}
//                         className="p-1 rounded hover:bg-muted transition-colors"
//                       >
//                         <Plus className="h-4 w-4 text-foreground" />
//                       </button>
//                     </div>
//                     <p className="text-sm font-bold text-foreground w-16 text-right">
//                       ₹{item.price * item.quantity}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Delivery Address Form */}
//               <div className="space-y-4 pt-4 border-t border-border">
//                 <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
//                   <MapPin className="h-4 w-4" /> Delivery Details
//                 </h3>
                
//                 <div className="space-y-3">
//                   <div>
//                     <label className="text-xs font-medium text-foreground mb-1 block">Full Name</label>
//                     <div className="relative">
//                       <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                       <input
//                         type="text"
//                         name="name"
//                         value={addressForm.name}
//                         onChange={handleInputChange}
//                         placeholder="Enter your name"
//                         className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="text-xs font-medium text-foreground mb-1 block">Phone Number</label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={addressForm.phone}
//                         onChange={handleInputChange}
//                         placeholder="WhatsApp number"
//                         className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="text-xs font-medium text-foreground mb-1 block">Complete Address</label>
//                     <textarea
//                       name="address"
//                       value={addressForm.address}
//                       onChange={handleInputChange}
//                       placeholder="House No, Street, Landmark, Area..."
//                       rows={3}
//                       className="w-full px-4 py-2 text-sm rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none resize-none"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Footer: Total and Order Button */}
//             <div className="border-t border-border pt-4 space-y-3 bg-background">
//               <div className="flex justify-between items-center text-lg font-bold">
//                 <span className="text-foreground">Total</span>
//                 <span className="text-primary">₹{totalPrice}</span>
//               </div>
//               <p className="text-[10px] text-center text-muted-foreground">
//                 Pay on Delivery available for all orders.
//               </p>
//               <button
//                 onClick={handleOrder}
//                 disabled={!isFormValid}
//                 className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
//                   isFormValid 
//                   ? "gradient-green text-primary-foreground hover:opacity-90" 
//                   : "bg-muted text-muted-foreground cursor-not-allowed"
//                 }`}
//               >
//                 Order on WhatsApp
//               </button>
//             </div>
//           </>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default CartSheet;






import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Trash2, Plus, Minus, MapPin, User, Phone, Target, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartSheet = () => {
  const { cart, totalItems, totalPrice, sendToWhatsApp, removeFromCart, addToCart } = useCart();
  
  // State for delivery details
  const [addressForm, setAddressForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const [isLocating, setIsLocating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddressForm(prev => ({ ...prev, [name]: value }));
  };

  // Function to handle Geolocation
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Fetching address from coordinates using OpenStreetMap's Nominatim API
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          
          setAddressForm(prev => ({
            ...prev,
            address: data.display_name || `Lat: ${latitude}, Lon: ${longitude}`
          }));
        } catch (error) {
          console.error("Error fetching address:", error);
          setAddressForm(prev => ({
            ...prev,
            address: `Coordinates: ${latitude}, ${longitude}`
          }));
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        setIsLocating(false);
        if (error.code === 1) {
          alert("Location permission denied. Please allow location access in your browser settings.");
        } else {
          alert("Unable to retrieve location. Please type your address manually.");
        }
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  const handleOrder = () => {
    if (!addressForm.name || !addressForm.phone || !addressForm.address) {
      alert("Please fill in all delivery details before ordering.");
      return;
    }
    sendToWhatsApp(addressForm);
  };

  const isFormValid = addressForm.name && addressForm.phone && addressForm.address;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Cart"
        >
          <ShoppingCart className="h-5 w-5 text-primary" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 gradient-green text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
        <SheetHeader className="pb-4 border-b border-border">
          <SheetTitle className="font-heading text-xl">Your Cart</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-6 pr-1">
              {/* Cart Items List */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Items</h3>
                {cart.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 bg-secondary rounded-lg p-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                      <p className="text-sm text-primary font-semibold">₹{item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="p-1 rounded hover:bg-muted transition-colors"
                      >
                        {item.quantity === 1 ? (
                          <Trash2 className="h-4 w-4 text-destructive" />
                        ) : (
                          <Minus className="h-4 w-4 text-foreground" />
                        )}
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => addToCart({ name: item.name, price: item.price })}
                        className="p-1 rounded hover:bg-muted transition-colors"
                      >
                        <Plus className="h-4 w-4 text-foreground" />
                      </button>
                    </div>
                    <p className="text-sm font-bold text-foreground w-16 text-right">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Delivery Address Form */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Delivery Details
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        value={addressForm.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        value={addressForm.phone}
                        onChange={handleInputChange}
                        placeholder="WhatsApp number"
                        className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-medium text-foreground block">Complete Address</label>
                      <button 
                        type="button"
                        onClick={handleGetLocation}
                        disabled={isLocating}
                        className="text-[10px] text-primary hover:underline font-bold flex items-center gap-1 bg-primary/5 px-2 py-0.5 rounded"
                      >
                        {isLocating ? (
                          <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                          <Target className="h-3 w-3" />
                        )}
                        {isLocating ? "Locating..." : "Detect Location"}
                      </button>
                    </div>
                    <textarea
                      name="address"
                      value={addressForm.address}
                      onChange={handleInputChange}
                      placeholder="House No, Street, Landmark, Area..."
                      rows={3}
                      className="w-full px-4 py-2 text-sm rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none resize-none"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-3 bg-background">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">₹{totalPrice}</span>
              </div>
              <p className="text-[10px] text-center text-muted-foreground">
                Pay on Delivery available for all orders.
              </p>
              <button
                onClick={handleOrder}
                disabled={!isFormValid || isLocating}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  isFormValid && !isLocating
                  ? "gradient-green text-primary-foreground hover:opacity-90" 
                  : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                Order on WhatsApp
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;