import { Link } from "react-router-dom";
import { Truck, ShieldCheck, Leaf, Droplets, Dumbbell } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import farmHero from "@/assets/farm-hero.png";
import milkPour from "@/assets/milk-pour.png";
import delivery from "@/assets/delivery.png";
import milkBottles from "@/assets/milk-bottles.jpeg";

const whyChoose = [
  { icon: Leaf, title: "100% Natural Milk", desc: "No preservatives or artificial flavors" },
  { icon: Droplets, title: "Farm Fresh Daily", desc: "Delivered straight from our dairy farms" },
  { icon: ShieldCheck, title: "No Chemicals", desc: "Pure and unadulterated goodness" },
  { icon: Truck, title: "Home Delivery", desc: "Morning & evening delivery slots" },
  { icon: Dumbbell, title: "High Protein", desc: "Naturally protein-rich options available" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img src={farmHero} alt="Dairy farm landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-xl">
            <img src={logo} alt="MilkWonders" className="h-20 w-20 rounded-full object-cover mb-6 shadow-lg" />
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-4">
              100% Farm Fresh Milk
            </h1>
            <p className="text-xl font-heading text-primary font-semibold mb-2">Pure Love in Every Drop</p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Milkwonders delivers pure, farm-fresh milk straight from our dairy farms to your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="gradient-green text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                View Products
              </Link>
              <a
                href="https://wa.me/917396304599?text=Hello%20MilkWonders%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                About MilkWonders
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Milkwonders delivers pure, farm-fresh milk straight from our dairy farms to your home. No preservatives. No added water. No artificial flavors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Just natural goodness as nature intended — from our farms to your family's table.
              </p>
              <Link
                to="/about"
                className="gradient-green text-primary-foreground px-6 py-3 rounded-lg font-semibold inline-block hover:opacity-90 transition-opacity"
              >
                Learn More
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={milkBottles} alt="Farm fresh milk bottles" className="w-full h-80 lg:h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
              <img src={delivery} alt="Milk delivery" className="w-full h-80 lg:h-96 object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                🚚 Fresh Delivery, Every Day
              </h2>
              <div className="space-y-4 mb-6">
                <div className="bg-secondary rounded-lg p-5">
                  <p className="font-semibold text-foreground text-lg">🌅 Morning Delivery</p>
                  <p className="text-muted-foreground">6:00 AM – 8:00 AM</p>
                </div>
                <div className="bg-secondary rounded-lg p-5">
                  <p className="font-semibold text-foreground text-lg">🌆 Evening Delivery</p>
                  <p className="text-muted-foreground">5:00 PM – 9:00 PM</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">Delivery available in main cities of Andhra Pradesh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Why Choose MilkWonders?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="gradient-green w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
