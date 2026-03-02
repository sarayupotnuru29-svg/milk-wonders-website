import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartSheet = () => {
  const { cart, totalItems, totalPrice, sendToWhatsApp, removeFromCart, addToCart } = useCart();

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
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
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
            <div className="flex-1 overflow-y-auto space-y-3 py-4">
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

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">₹{totalPrice}</span>
              </div>
              <button
                onClick={sendToWhatsApp}
                className="w-full gradient-green text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
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
