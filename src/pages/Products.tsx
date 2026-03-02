// import ProductCard from "@/components/ProductCard";
// import milkBottles from "@/assets/milk-bottles.jpeg";
// import paneerProduct from "@/assets/paneer-product.jpeg";
// import gheeProduct from "@/assets/ghee-product.jpeg";
// import curdProduct from "@/assets/curd-product.jpeg";

// const milkProducts = [
//   { name: "Natural High Protein Buffalo Milk (30gm protein) 500ML", price: 48, originalPrice: 60 },
//   { name: "Natural High Protein Buffalo Milk (40gm protein) 1000ML", price: 99, originalPrice: 120 },
//   { name: "High Protein Cow Milk (30gm protein) 500ML", price: 40, originalPrice: 50 },
//   { name: "High Protein Cow Milk (30gm protein) 1000ML", price: 80, originalPrice: 100 },
//   { name: "Cow Milk 500ML", price: 35, originalPrice: 45 },
//   { name: "Cow Milk 1000ML", price: 70, originalPrice: 90 },
//   { name: "Buffalo Milk 500ML", price: 40, originalPrice: 45 },
//   { name: "Buffalo Milk 1000ML", price: 80, originalPrice: 90 },
// ];

// const paneerProducts = [
//   { name: "Taaza Paneer High Protein (40gm) 250gm", price: 120, originalPrice: 150 },
//   { name: "Taaza Paneer High Protein (40gm) 500gm", price: 240, originalPrice: 300 },
//   { name: "Taaza Paneer High Protein (40gm) 1kg", price: 480, originalPrice: 600 },
// ];

// const gheeProducts = [
//   { name: "Bilona Buffalo Ghee 500ML", price: 649, originalPrice: 840 },
//   { name: "Bilona Buffalo Ghee 1000ML", price: 1199, originalPrice: 1699 },
//   { name: "Bilona Cow Ghee 500ML", price: 649, originalPrice: 840 },
//   { name: "Bilona Cow Ghee 1000ML", price: 1199, originalPrice: 1499 },
// ];

// const curdProducts = [
//   { name: "Farm Fresh Plain Curd 1kg", price: 110, originalPrice: 130 },
//   { name: "Farm Fresh Plain Curd 500ML", price: 58, originalPrice: 75 },
//   { name: "Farm Fresh Plain Curd 250ML", price: 29, originalPrice: 37 },
// ];

// interface CategorySectionProps {
//   title: string;
//   emoji: string;
//   image: string;
//   products: { name: string; price: number; originalPrice?: number }[];
// }

// const CategorySection = ({ title, emoji, image, products }: CategorySectionProps) => (
//   <section className="py-12">
//     <div className="flex items-center gap-3 mb-8">
//       <span className="text-3xl">{emoji}</span>
//       <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">{title}</h2>
//     </div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {products.map((p) => (
//         <ProductCard key={p.name} {...p} image={image} />
//       ))}
//     </div>
//   </section>
// );

// const Products = () => {
//   return (
//     <main>
//       {/* Header */}
//       <section className="gradient-green py-16">
//         <div className="container mx-auto px-4 lg:px-8 text-center">
//           <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-3">Our Products</h1>
//           <p className="text-primary-foreground/80 text-lg">Farm fresh dairy delivered to your doorstep</p>
//         </div>
//       </section>

//       <div className="container mx-auto px-4 lg:px-8">
//         <CategorySection title="Fresh Milk" emoji="🥛" image={milkBottles} products={milkProducts} />
//         <CategorySection title="Taaza Paneer" emoji="🧀" image={paneerProduct} products={paneerProducts} />
//         <CategorySection title="Desi Bilona Ghee" emoji="🧈" image={gheeProduct} products={gheeProducts} />
//         <CategorySection title="Farm Fresh Curd" emoji="🥣" image={curdProduct} products={curdProducts} />
//       </div>
//     </main>
//   );
// };

// export default Products;





import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import milkBottles from "@/assets/milk-bottles.jpeg";
import paneerProduct from "@/assets/paneer-product.jpeg";
import gheeProduct from "@/assets/ghee-product.jpeg";
import curdProduct from "@/assets/curd-product.jpeg";

// Structured data with variants
const milkProducts = [
  {
    name: "Natural High Protein Buffalo Milk",
    info: "30gm - 40gm protein",
    variants: [
      { size: "500ML", price: 48, originalPrice: 60 },
      { size: "1000ML", price: 99, originalPrice: 120 },
    ],
  },
  {
    name: "High Protein Cow Milk",
    info: "30gm protein",
    variants: [
      { size: "500ML", price: 40, originalPrice: 50 },
      { size: "1000ML", price: 80, originalPrice: 100 },
    ],
  },
  {
    name: "Cow Milk",
    info: "Fresh Cow Milk",
    variants: [
      { size: "500ML", price: 35, originalPrice: 45 },
      { size: "1000ML", price: 70, originalPrice: 90 },
    ],
  },
  {
    name: "Buffalo Milk",
    info: "Fresh Buffalo Milk",
    variants: [
      { size: "500ML", price: 40, originalPrice: 45 },
      { size: "1000ML", price: 80, originalPrice: 90 },
    ],
  },
];

const paneerProducts = [
  {
    name: "Taaza Paneer High Protein",
    info: "40gm Protein",
    variants: [
      { size: "250gm", price: 120, originalPrice: 150 },
      { size: "500gm", price: 240, originalPrice: 300 },
      { size: "1kg", price: 480, originalPrice: 600 },
    ],
  },
];

const gheeProducts = [
  {
    name: "Bilona Buffalo Ghee",
    info: "Traditional Method",
    variants: [
      { size: "500ML", price: 649, originalPrice: 840 },
      { size: "1000ML", price: 1199, originalPrice: 1699 },
    ],
  },
  {
    name: "Bilona Cow Ghee",
    info: "Pure Cow Ghee",
    variants: [
      { size: "500ML", price: 649, originalPrice: 840 },
      { size: "1000ML", price: 1199, originalPrice: 1499 },
    ],
  },
];

const curdProducts = [
  {
    name: "Farm Fresh Plain Curd",
    info: "Natural & Creamy",
    variants: [
      { size: "250ML", price: 29, originalPrice: 37 },
      { size: "500ML", price: 58, originalPrice: 75 },
      { size: "1kg", price: 110, originalPrice: 130 },
    ],
  },
];

interface Product {
  name: string;
  info: string;
  variants: { size: string; price: number; originalPrice?: number }[];
}

interface CategorySectionProps {
  title: string;
  emoji: string;
  image: any;
  products: Product[];
}

// Internal Component to handle Size Selection Logic
const MultiVariantProductCard = ({ product, image }: { product: Product, image: any }) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const currentVariant = product.variants[selectedVariantIndex];

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border p-4 transition-all hover:shadow-md">
      {/* Reusing your ProductCard visual logic but with internal state */}
      <ProductCard 
        name={`${product.name} (${currentVariant.size})`}
        price={currentVariant.price}
        originalPrice={currentVariant.originalPrice}
        image={image}
      />
      
      {/* Size Selector Tabs */}
      <div className="mt-4">
        <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Choose Quantity:</p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((variant, index) => (
            <button
              key={variant.size}
              onClick={() => setSelectedVariantIndex(index)}
              className={`px-3 py-1 text-sm rounded-md border transition-colors ${
                selectedVariantIndex === index
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background hover:bg-muted"
              }`}
            >
              {variant.size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ title, emoji, image, products }: CategorySectionProps) => (
  <section className="py-12">
    <div className="flex items-center gap-3 mb-8">
      <span className="text-3xl">{emoji}</span>
      <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">{title}</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <MultiVariantProductCard key={p.name} product={p} image={image} />
      ))}
    </div>
  </section>
);

const Products = () => {
  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* Header */}
      <section className="bg-[#004d43] py-16 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-3">Our Products</h1>
          <p className="opacity-90 text-lg">Farm fresh dairy delivered to your doorstep</p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 pb-20">
        <CategorySection title="Fresh Milk" emoji="🥛" image={milkBottles} products={milkProducts} />
        <CategorySection title="Taaza Paneer" emoji="🧀" image={paneerProduct} products={paneerProducts} />
        <CategorySection title="Desi Bilona Ghee" emoji="🧈" image={gheeProduct} products={gheeProducts} />
        <CategorySection title="Farm Fresh Curd" emoji="🥣" image={curdProduct} products={curdProducts} />
      </div>
    </main>
  );
};

export default Products;