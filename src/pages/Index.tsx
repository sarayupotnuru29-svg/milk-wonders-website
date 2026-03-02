import { Link } from "react-router-dom";
import farmHero from "@/assets/farm-hero.png";
import milkBottles from "@/assets/milk-bottles.jpeg";
import aboutMilkwonders from "@/assets/about-milkwonders.png";
import deliveryBg from "@/assets/delivery-bg.png";
import whyNatural from "@/assets/why-natural.png";
import whyFresh from "@/assets/why-fresh.png";
import whyNochemicals from "@/assets/why-nochemicals.png";
import whyDelivery from "@/assets/why-delivery.png";
import whyProtein from "@/assets/why-protein.png";

const whyChoose = [
  { image: whyNatural, title: "100% Natural Milk", desc: "No preservatives or artificial flavors" },
  { image: whyFresh, title: "Farm Fresh Daily", desc: "Delivered straight from our dairy farms" },
  { image: whyNochemicals, title: "No Chemicals", desc: "Pure and unadulterated goodness" },
  { image: whyDelivery, title: "Home Delivery", desc: "Morning & evening delivery slots" },
  { image: whyProtein, title: "High Protein", desc: "Naturally protein-rich options available" },
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
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-4 whitespace-nowrap">
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
              <img src={aboutMilkwonders} alt="About MilkWonders farm" className="w-full h-80 lg:h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery - background image instead of side image */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <img src={deliveryBg} alt="Dairy farm" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8">
              🚚 Fresh Delivery, Every Day
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border">
                <p className="font-semibold text-foreground text-lg">🌅 Morning Delivery</p>
                <p className="text-muted-foreground">6:00 AM – 8:00 AM</p>
              </div>
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border">
                <p className="font-semibold text-foreground text-lg">🌆 Evening Delivery</p>
                <p className="text-muted-foreground">5:00 PM – 9:00 PM</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">Delivery available in main cities of Andhra Pradesh.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - images instead of icons */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Why Choose MilkWonders?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
