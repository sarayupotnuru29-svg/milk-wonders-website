import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
}

const ProductCard = ({ name, price, originalPrice, image }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ name, price });
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="group bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {image && (
        <div className="overflow-hidden aspect-square bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-sm leading-tight text-foreground mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          )}
        </div>
        <button
          onClick={handleAdd}
          className="w-full gradient-green text-primary-foreground py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
