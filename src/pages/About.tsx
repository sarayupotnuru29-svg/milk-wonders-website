import aboutFarm from "@/assets/about-farm.png";
import ourStory from "@/assets/our-story.png";
import galleryBottles from "@/assets/gallery-bottles.png";
import galleryCows from "@/assets/gallery-cows.png";
import galleryProducts from "@/assets/gallery-products.png";

const About = () => {
  return (
    <main>
      {/* Banner */}
      <section className="relative h-72 lg:h-96 overflow-hidden">
        <img src={aboutFarm} alt="Dairy farm" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">About Us</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Milkwonders delivers pure, farm-fresh milk straight from our dairy farms to your home. Our milk contains no preservatives, no added water, and no artificial flavors — just natural goodness as nature intended.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in the purity of tradition. Every bottle of milk, every cube of paneer, and every spoon of ghee carries the warmth of our farm and the love of our people.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={ourStory} alt="Our dairy farming story" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Delivery */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">🕒 Business Hours</h3>
              <p className="text-muted-foreground">Monday – Sunday</p>
              <p className="text-foreground font-semibold text-lg">5:00 AM – 8:00 PM</p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">🚚 Delivery Timing</h3>
              <p className="text-muted-foreground mb-1">Morning: <span className="text-foreground font-semibold">6AM – 8AM</span></p>
              <p className="text-muted-foreground">Evening: <span className="text-foreground font-semibold">5PM – 9PM</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-10">From Our Farm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[galleryBottles, galleryCows, galleryProducts].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md aspect-video">
                <img src={img} alt="Farm gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
